import React from 'react';
import { mount, configure } from 'enzyme';
import PageNotFound from './pageNotFound';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {
    let pageNotFound = mount(<PageNotFound />);

    it("check footer text", () => {
        expect(pageNotFound.find('h1').text()).toEqual('404 Page Not Found!')
    })
})
