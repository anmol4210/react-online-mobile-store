import cart from './cart_reducer'
import * as actionTypes from '../actions/action'


describe('cart reducer', () => {
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

    it('should return the initial state', () => {
        expect(cart([], {})).toEqual([])
    })

    it('add product to cart', () => {
        expect(cart([], { type: actionTypes.ADD_MOBILE, mobile })).toEqual([mobile])
    })

    it('delete product from cart', () => {

        expect(cart([mobile], { type: actionTypes.DELETE_MOBILE, mobile })).toEqual([])
    })
    it('delete all mobiles', () => {
        expect(cart([mobile], { type: actionTypes.DELETE_ALL_MOBILES })).toEqual([])
    })
})