import React from 'react'
import Hero from './Hero'
import { shallow, mount } from 'enzyme'

describe('Hero', () => {
    beforeEach(() => {
        jest.useFakeTimers()
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

    it('should calculate a height that does not exceed the screen height', () => {
        const wrapper = shallow(<Hero/>)
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

    it('should update the height when the screen is resized', () => {
        // Mock event listeners
        const map = {}
        window.addEventListener = jest.fn((event, cb) => { map[event] = cb })

        const componentDidMountSpy = jest.spyOn(Hero.prototype, 'componentDidMount')
        const updateHeightSpy = jest.spyOn(Hero.prototype, 'updateHeight')

        const component = mount(<Hero></Hero>)

        // Hero height is updated on mount
        expect(componentDidMountSpy).toHaveBeenCalled()
        expect(updateHeightSpy).toHaveBeenCalledTimes(1)

        map.resize()

        jest.advanceTimersByTime(1000)

        // Hero height is updated after window.resize event is fired
        expect(updateHeightSpy).toHaveBeenCalledTimes(2)

        component.unmount()
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
        const wrapper = shallow(<Hero className={ className }/>)
        expect(wrapper.hasClass(className)).toBe(true)
    })
})
