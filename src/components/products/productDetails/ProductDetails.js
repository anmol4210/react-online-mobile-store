import { Component } from "react";
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { addMobileById } from '../../../actions/action'
import { ToastsStore } from 'react-toasts';

class ProductDetails extends Component {
    state = {
        id: 0,

        data: []
    };

    constructor(props) {
        super(props);
        this.state.id = props.match.params.id

    }

    addToCart(mobile) {

        let obj = this.props.dispatch(addMobileById(mobile))

        if (obj.mobile) {
            ToastsStore.success("Product added to cart")

        }
        else {
            ToastsStore.success("Unable to add product")

        }

        this.props.history.push('/')

    }


    componentDidMount() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        }
        const apiUrl = 'http://localhost:3000/mobiles/' + this.state.id;

        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({ "data": data })


            })
    }
    render() {
        return (
            <div className="row">

                <div className="col-sm-4">
                </div>
                <div className="col-sm-4">
                    <ul className="list-group">
                        <li className="list-group-item mt-2">
                            <div className="row">
                                <div className="col-sm-4">Name:</div>
                                <div className="col-sm-8">{this.state.data.name}</div>
                            </div>

                        </li>
                        <li className="list-group-item mt">
                            <div className="row">
                                <div className="col-sm-4">Price:</div>
                                <div className="col-sm-8">{this.state.data.price}</div>
                            </div>
                        </li>

                        <li className="list-group-item mt">
                            <div className="row">
                                <div className="col-sm-4">Model Number:</div>
                                <div className="col-sm-8">{this.state.data.model_number}</div>
                            </div>

                        </li>
                        <li className="list-group-item mt">
                            <div className="row">
                                <div className="col-sm-4">Screen Size:</div>
                                <div className="col-sm-8">{this.state.data['screen-size']}</div>
                            </div>
                        </li>

                        <li className="list-group-item mt">
                            <div className="row">
                                <div className="col-sm-4">Operating System:</div>
                                <div className="col-sm-8">{this.state.data['operating-system']}</div>
                            </div>

                        </li>
                        <li className="list-group-item mt">
                            <div className="row">
                                <div className="col-sm-4">Ram:</div>
                                <div className="col-sm-8">{this.state.data.ram}</div>
                            </div>

                        </li>
                        <li className="list-group-item mt">
                            <div className="row">
                                <div className="col-sm-4">Storage:</div>
                                <div className="col-sm-8">{this.state.data.storage}</div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-4">  <button className="btn btn-dark mt-2" onClick={() => this.addToCart(this.state.data)}>Add To Cart</button></div>
            </div>
        )
    }
}



function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addMobileById }, dispatch)
}


export default connect(mapDispatchToProps)(ProductDetails);
