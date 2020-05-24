import mobiles from './product_reducer'
import * as actionTypes from '../actions/action'

describe('mobile reducer', () => {
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
        expect(mobiles([], {})).toEqual([])
    })

    it('should add mobile', () => {
        expect(mobiles([mobile], { type: actionTypes.ADD_MOBILE, mobile })).toEqual([])
    })

    it('should delete mobile', () => {
        expect(mobiles([], { type: actionTypes.DELETE_MOBILE, mobile })).toEqual([mobile])
    })

    it('should return all mobiles', () => {
        expect(mobiles([mobile], { type: actionTypes.GET_ALL_MOBILES, data: [mobile] })).toEqual([mobile])
    })
})