import React from 'react'

import { shallow } from 'enzyme'
import Company from './company'


describe('Return company describe', () =>{
    it('return company choose', () => {

        const wrapper = shallow(<Company/>)
        const Company = wrapper.state().company

        expect(Company).toBeDefined

    })
})
