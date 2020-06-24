import React from 'react'
import Spinner from '../components/Spinner/Spinner'

describe('test', ()=>{
    it('test 2', ()=>{
        const wrapper = render(<Spinner title="unique1" />);
        expect(wrapper).toMatchSnapshot()
    })
})
