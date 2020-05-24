import React from 'react';
import { mount, configure, shallow, render } from 'enzyme';
import Login from './login';
import Adapter from 'enzyme-adapter-react-16';
// import { LoginContext } from '../../App'
configure({ adapter: new Adapter() });

describe('Login user', () => {

    const props = {}
    var login = render(<Login {...props} />);

    it('check cart mobiles', () => {
        expect(login.find('Form')).toHaveLength(1)
    })
})
