import React, { useState, useEffect, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { LoginContext } from '../../App'
import { removeMobileById, removeAllMobiles, getMobiles } from '../../actions/action'
import { ToastsStore } from 'react-toasts';

export const Cart = (props) => {

    function total(mobiles) {
        let sum = parseInt(0, 10)
        for (let index = 0; index < mobiles.length; index++) {
            if (mobiles[index].count) {
                sum += (parseInt(mobiles[index].price) * 2)
            }
            else {
                sum += parseInt(mobiles[index].price)
            }
        }
        return sum
    }
    const name = useContext(LoginContext)
    var [mobiles, setMobiles] = useState(props.cart);
    let [amount, setAmount] = useState(() => total(mobiles))


    useEffect(() => {

        setMobiles(props.cart);


    }, [props.cart]);


    const incrementCount = (mobile) => {
        let inputBox = document.getElementById(mobile.id)

        if (mobile.count) {
            mobile.count = mobile.count + 1

        }
        else {
            mobile.count = 2
        }
        inputBox.value = mobile.count
        setAmount(amount + parseInt(mobile.price, 10))

    }

    const placeOrder = () => {
        props.removeAllMobiles()
        props.getMobiles()
        let orderId = Math.floor(Math.random() * 10000)
        ToastsStore.success(`Order placed Successfully with ID: ${orderId}`)

        props.history.push('/')
    }

    let placeOrderBtn = {}
    if (mobiles.length === 0) {
        placeOrderBtn = <h3>Cart is Empty!</h3>
    }
    else if (name.username.username && (name.username.username !== "")) {
        placeOrderBtn = (<div>
            <h4>Total: {amount}</h4>
            <button className="btn btn-dark m-2" onClick={placeOrder}> Place Order</button>

        </div>)
    }
    else {
        placeOrderBtn = (<div>
            <h3>Login to place order</h3>
            <h4>Total: {amount}</h4>
        </div>)
    }
    // placeOrder.push(<h4>Total: {amount}</h4>)

    const decrementCount = (mobile) => {
        let inputBox = document.getElementById(mobile.id)
        // let mob = mobile
        if (mobile.count && (mobile.count > 1)) {
            mobile.count = mobile.count - 1

        }
        else {
            props.removeMobileById(mobile)

        }
        inputBox.value = mobile.count
        setAmount(amount - parseInt(mobile.price, 10))

    }

    return (<div>

        <div className="row">

            <div className="col-sm-4">

            </div>

            <div className="text-dark col-sm-4">
                {mobiles.map(mobile => {
                    return (
                        <div className="card m-2 mr-5" key={mobile.id}>
                            <div className="card-body">
                                <h4 className="card-title">{mobile.name}</h4>
                                <p className="card-text">
                                    Price: Rs {mobile.price}
                                </p>
                                <div className="row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-8 input-group">
                                        <div className="input-group-prepend">
                                            <button className="input-group-text" onClick={() => incrementCount(mobile)}>
                                                <i className="material-icons">add</i>
                                            </button>
                                        </div>
                                        <input type="text" id={mobile.id} readOnly="True" className="bg-white text-center form-control" value={(mobile.count === undefined) ? 1 : mobile.count}></input>

                                        <div className="input-group-append">
                                            <button className="input-group-text" onClick={() => decrementCount(mobile)}>
                                                <i className="material-icons">remove</i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-sm-2"></div>
                                </div>
                            </div>
                        </div>)
                })

                }
            </div>

            <div className="col-sm-4">

                {placeOrderBtn}
            </div>
        </div>

    </div>)
}

function mapStateToProps(state) {
    return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeMobileById, removeAllMobiles, getMobiles }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);