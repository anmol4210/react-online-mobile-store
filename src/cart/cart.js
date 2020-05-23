import React, { useState, useEffect, useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { LoginContext } from '../App'
import { removeMobileById, removeAllMobiles, getMobiles } from '../actions/action'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { ToastsStore } from 'react-toasts';
// import { useToasts } from 'react-toast-notifications'
const Cart = (props) => {

    // const { addToast } = useToasts()
    const name = useContext(LoginContext)
    var [mobiles, setMobiles] = useState(props.cart);

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

    }




    const placeOrder = () => {
        props.removeAllMobiles()
        props.getMobiles()
        let orderId = Math.floor(Math.random() * 10000)
        // toast(`Order placed Successfully with ID: ${orderId}`);
        ToastsStore.success(`Order placed Successfully with ID: ${orderId}`)
        // addToast(`Order placed Successfully with ID: ${orderId}`, {
        //     appearance: 'success',
        //     autoDismiss: true,
        // })
        props.history.push('/')
    }

    let placeOrderBtn = {}
    if (mobiles.length === 0) {
        placeOrderBtn = <h3>Cart is Empty!</h3>
    }
    else if (name.username.username !== "") {
        placeOrderBtn = <button className="btn btn-dark m-2" onClick={placeOrder}> Place Order</button>
    }
    else {
        placeOrderBtn = <h3>Login to place order</h3>
    }

    const decrementCount = (mobile) => {
        let inputBox = document.getElementById(mobile.id)
        // let mob = mobile
        if (mobile.count && (mobile.count > 1)) {
            mobile.count = mobile.count - 1

        }
        else {
            // mobile.count = 2
            props.removeMobileById(mobile)

        }
        inputBox.value = mobile.count
        // console.log(mobile)
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
                                    <div className="col-sm-3"></div>
                                    <div className="col-sm-6 input-group">
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
                                    <div className="col-sm-3"></div>
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