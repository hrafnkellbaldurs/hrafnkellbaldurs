import React from 'react'
import Experience from './Experience'
import { shallow } from 'enzyme'
import { spyConsole } from '../../scripts/testUtils'

describe('Experience', () => {
    let spy = spyConsole()

    it('should exist', () => {
        const wrapper = shallow(<Experience/>)
        expect(wrapper.exists()).toBe(true)
    })

    it('should have console.error call when required props are missing', () => {
        shallow(<Experience />)
        expect(console.error).toHaveBeenCalled()
    })
})
