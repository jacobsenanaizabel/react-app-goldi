import React from 'react'

import { shallow } from 'enzyme'
import Discovery from './listcompanies'


describe('Return discovery', () =>{
    it('return list of discovery', () => {

        const wrapper = shallow(<Discovery/>)
        const discovery = wrapper.state().discovery

        expect(discovery).toBeDefined

    })
})
