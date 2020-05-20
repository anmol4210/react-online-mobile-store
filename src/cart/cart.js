import React, { useState, useEffect } from 'react';
import './cart.css'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { addMobileById, removeMobileById } from '../actions/action'
// import { Icon } from 'react-native-elements'
const Cart = (props) => {
    var [mobiles, setMobiles] = useState(props.cart);

    useEffect(() => {
        console.log("use effect")
        // console.log(mobiles)
        setMobiles(props.cart);
        console.log(props.cart)
    }, [props.cart]);


    const incrementCount = (mobile) => {
        // console.log(event)
        // let { name, value } = event.target
        let inputBox = document.getElementById(mobile.id)
        // let mob = mobile
        if (mobile.count) {
            mobile.count = mobile.count + 1

        }
        else {
            mobile.count = 2
        }
        inputBox.value = mobile.count
        // console.log(mobile)
        // console.log(inputBox.value)
        // console.log(value)
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
        console.log(mobile)
    }

    return (<div>

        <div className="row">
            <div className="col-sm-4"></div>

            <div className="text-dark col-sm-4 m-3">
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
                                        <input type="text" id={mobile.id} readOnly="True" className="bg-white text-center form-control" value="1"></input>

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

            <div className="col-sm-4"></div>
        </div>

    </div>)
}

function mapStateToProps(state) {
    return { cart: state.cart }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeMobileById, addMobileById }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);