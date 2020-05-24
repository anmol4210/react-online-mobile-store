import React from 'react';
import { mount, configure, shallow, render } from 'enzyme';
import { Cart } from './cart';
import Adapter from 'enzyme-adapter-react-16';
import { LoginContext } from '../../App'
configure({ adapter: new Adapter() });

let mobile = {
    "id": 1,
    "name": "Samsung Galaxy Z Flip",
    "price": "116000",
    "model_number": "67r78",
    "colors": ["Mirror Black", "Mirror Gold", "Mirror Purple"],
    "screen-size": "6.7 inch",
    "operating-system": "Android",
    "ram": "8gb",
    "storage": "256gb"
}
let cart_mobile = {
    "id": 2,
    "name": "Motorola Razr",
    "price": "124999",
    "model_number": "23ed4",
    "colors": ["Black"],
    "screen-size": "6.2 inch",
    "operating-system": "Android",
    "ram": "6gb",
    "storage": "128gb"
}
describe('Cart with mobiles', () => {
    const context = {
        name: {
            username: {
                username: "anmol"
            }
        }
    };
    let props = { "mobiles": [mobile], "cart": [cart_mobile] }

    const cart = mount(<LoginContext.Provider value={{
        username: {
            username: "anmol"
        }
    }}>
        <Cart {...props} />
    </LoginContext.Provider>);

    it('check cart mobiles', () => {
        expect(cart.props().cart).toEqual([cart_mobile])
    })
})