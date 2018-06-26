import React from 'react'

import { shallow } from 'enzyme'
import Listcompanies from './listcompanies'


describe('List component', () =>{
    it('return list companies', () => {

        const wrapper = shallow(<Listcompanies/>)
        const listCompanies = wrapper.state().companies

        expect(listCompanies).toBeDefined

    })
})
