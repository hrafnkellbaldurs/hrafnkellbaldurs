import React from 'react'
import Hero from './Hero'
import { shallow, mount } from 'enzyme'

describe('Hero', () => {
    beforeEach(() => {
        jest.useFakeTimers()
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    it('should exist', () => {
        const wrapper = shallow(<Hero />)
        expect(wrapper.exists()).toBe(true)
    })

    it('should render passed in children', () => {
        const wrapper = shallow(
            <Hero>
                <div id="child"></div>
            </Hero>
        )

        expect(wrapper.exists('#child')).toBe(true)
    })

    it('should set the passed in backgroundUrl', () => {
        const backgroundUrl = 'myimage'
        const wrapper = shallow(<Hero backgroundUrl={ backgroundUrl } />)
        const wrapperStyle = wrapper.get(0).props.style
        expect(wrapperStyle).toHaveProperty('backgroundImage')
        expect(wrapperStyle.backgroundImage).toContain(backgroundUrl)
    })

    it('should use the passed in className', () => {
        const className = 'myClassName'
        const wrapper = shallow(<Hero className={ className } />)
        expect(wrapper.hasClass(className)).toBe(true)
    })

    describe('Height calculations and window events | ', () => {
        it('should calculate a height that does not exceed the screen height', () => {
            const wrapper = shallow(<Hero />)
            const windowHeight = 500
            const heroOffsetTop = 50
            const result = wrapper.instance().getNewHeight(windowHeight, heroOffsetTop)
            expect(result).toBeLessThanOrEqual(windowHeight - heroOffsetTop)
        })

        it('should fill out the rest of the screen', () => {
            const component = mount(<Hero />)
            expect(component.getDOMNode().style.height).toEqual(`${ window.innerHeight }px`)
            component.unmount()
        })

        it('should NOT update Hero height its initially NOT fully visible', () => {
            const componentDidMountSpy = jest.spyOn(Hero.prototype, 'componentDidMount')
            const updateHeightSpy = jest.spyOn(Hero.prototype, 'updateHeight')

            // Set scrollY to be a high amount so that Hero is not in view
            window.scrollY = 1000
            const component = mount(<Hero />)

            // Hero height is not updated on mount if it's not initially visible
            expect(componentDidMountSpy).toHaveBeenCalled()
            expect(updateHeightSpy).toHaveBeenCalledTimes(0)

            component.unmount()
        })

        it('should update Hero height if its initially fully visible', () => {
            const componentDidMountSpy = jest.spyOn(Hero.prototype, 'componentDidMount')
            const updateHeightSpy = jest.spyOn(Hero.prototype, 'updateHeight')

            // Set scrollY to be a high amount so that Hero is not in view
            window.scrollY = 0
            const component = mount(<Hero />)

            // Hero height is not updated on mount if it's not initially visible
            expect(componentDidMountSpy).toHaveBeenCalled()
            expect(updateHeightSpy).toHaveBeenCalled()

            component.unmount()
        })

        it('should NOT update height if window is changed and hero is NOT fully visible', () => {
            const updateHeightSpy = jest.spyOn(Hero.prototype, 'updateHeight')

            // Set scrollY to be a high amount so that Hero is not in view
            const component = mount(<Hero />)
            const componentInstance = component.instance()

            // Clear all calls for spies to make sure componentDidMount does not affect calls
            jest.clearAllMocks()

            componentInstance.onWindowChange({
                scrollY: componentInstance.heroRef.current.offsetTop + 1,
                innerHeight: 1000
            })
            // updateHeight should not be called if the top of hero is not in view
            expect(updateHeightSpy).toHaveBeenCalledTimes(0)

            component.unmount()
        })

        it('should update height if window is changed and hero is fully visible', () => {
            const updateHeightSpy = jest.spyOn(Hero.prototype, 'updateHeight')

            // Set scrollY to be a high amount so that Hero is not in view
            const component = mount(<Hero />)
            const componentInstance = component.instance()

            // Clear all calls for spies to make sure componentDidMount does not affect calls
            jest.clearAllMocks()

            componentInstance.onWindowChange({
                scrollY: componentInstance.heroRef.current.offsetTop,
                innerHeight: 1000
            })
            expect(updateHeightSpy).toHaveBeenCalledTimes(1)

            componentInstance.onWindowChange({
                scrollY: componentInstance.heroRef.current.offsetTop - 1,
                innerHeight: 1000
            })
            expect(updateHeightSpy).toHaveBeenCalledTimes(2)

            component.unmount()
        })

        it('When window is resized or scrolled, onWindowChange is called', () => {
            // Mock addEventListener
            const map = {}
            window.addEventListener = jest.fn((event, cb) => { map[event] = cb })

            const onWindowChangeSpy = jest.spyOn(Hero.prototype, 'onWindowChange')
            const component = mount(<Hero></Hero>)
            const byPassDebounceDuration = component.instance().WINDOW_CHANGE_DEBOUNCE_DURATION + 1

            // When window is resized, onWindowChange is called
            map.resize()
            jest.advanceTimersByTime(byPassDebounceDuration)
            expect(onWindowChangeSpy).toHaveBeenCalledTimes(1)

            // When window is scrolled, onWindowChange is called
            map.scroll()
            jest.advanceTimersByTime(byPassDebounceDuration)
            expect(onWindowChangeSpy).toHaveBeenCalledTimes(2)

            component.unmount()
        })
    })
})
