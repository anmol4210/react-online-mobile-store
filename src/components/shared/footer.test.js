import React from 'react';
import { mount, configure } from 'enzyme';
import Footer from './footer';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Footer', () => {
    let footer = mount(<Footer />);

    it("check footer text", () => {
        expect(footer.find('div').text()).toEqual('Created by: Anmol Narang')
    })
})
