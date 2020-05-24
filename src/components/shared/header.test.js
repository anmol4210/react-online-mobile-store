import React from 'react';
import { mount, configure, shallow, render } from 'enzyme';
import Header from './header';
import Adapter from 'enzyme-adapter-react-16';
import { Link } from 'react-router-dom';
configure({ adapter: new Adapter() });

describe('Header', () => {
    let header
    beforeEach(() => {
        // localStorage.clear()
        // localStorage.setItem("username", "anmol")

        header = shallow(<Header />);
        // header.setState({ "loggedIn": true })
    })
    it('header test links', () => {
        expect(header.find('Link')).toHaveLength(2);
    })

    it('header test logout', () => {

        expect(header.contains(<Link className="text-white" to='/login'>Login</Link>)).toBe(true)

    })


})
