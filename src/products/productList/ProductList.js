import React, { useState, useEffect } from 'react';
import './productList.css'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMobileById, getMobiles } from '../../actions/action'



const ProductList = (props) => {
    let [mobiles, setMobiles] = useState(props.mobiles);
    // let [cart, setCart] = useState(props.cart);
    // console.log("hello")

    useEffect(() => {
        console.log("use effect")
        setMobiles(props.mobiles);
    }, [props.mobiles]);

    // useEffect(() => {
    //     // console.log("use effect")
    //     setCart(props.cart);
    //     console.log("cart", props.cart)
    // }, [props.cart]);

    const nextPage = (event) => {

        props.getMobiles(event.target.id)

        // let filtered_mobile = props.mobiles.filter((mob) => {
        //     return cart.indexOf(mob) === -1;
        // });
        // console.log("filtered", filtered_mobile)
        // setMobiles(filtered_mobile)


    }
    const addToCart = (mobile) => {
        // console.log(mobile)
        props.addMobileById(mobile)


    }
    const handleFormChange = (event) => {
        // let { name, value } = event.target 
        let value = event.target.value;
        let mobiles = props.mobiles.filter(mobile => mobile.name.toLowerCase().includes(value.toLowerCase()))
        setMobiles(mobiles)

    }
    const sort = (event) => {
        let id = event.target.id
        if (id === "low") {
            const sorted = [...mobiles].sort((a, b) => {
                return a.price - b.price;
            });
            setMobiles(sorted)
            // console.log(sorted)
        }
        else if (id === "high") {
            // console.log(mobiles)
            const sorted = [...mobiles].sort((a, b) => {
                return b.price - a.price;
            });
            setMobiles(sorted)
            // console.log(sorted)
        }
        // (mobiles)
    }
    let header = (<div className="row navbar navbar-light bg-light">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <input className="form-control " type="text" onChange={handleFormChange} placeholder="Search" />
        </div>

        <div className="col-sm-2">
            <button className="btn btn-dark">

                <Link className="text-white" to={{ pathname: '/cart' }}>Cart</Link>
            </button>
        </div>
        <div className="dropdown col-sm-2">
            <button className="dropbtn">Sort
                        <div className="dropdown-content">
                    <p onClick={sort} id="low">Low to High</p>
                    <p onClick={sort} id="high">High to Low</p>

                </div>
            </button>
        </div>
    </div>)

    let footer = (<div className="row">
        <div className="col-sm-5"></div>
        <div className="col-sm-3">
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    <li className="page-item disabled">
                        <div className="page-link pointer" id="0" tabIndex="-1">Previous</div>
                    </li>
                    <li className="page-item"><div className="page-link pointer" onClick={nextPage} id="1">1</div></li>
                    <li className="page-item"><div className="page-link pointer" onClick={nextPage} id="2">2</div></li>

                    <li className="page-item">
                        <div className="page-link pointer" id="3">Next</div>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="col-sm-4"></div>
    </div>);
    if (mobiles && mobiles.length > 0) {


        return (
            <div>
                {header}
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="text-dark col-sm-4  m-3">
                        {mobiles.map(mobile => {
                            return (
                                <div className="card m-2 mr-5" key={mobile.id}>

                                    <div className="card-body">
                                        <h4 className="card-title">{mobile.name}</h4>
                                        <p className="card-text">
                                            Price: Rs {mobile.price}
                                        </p>
                                        <button className="btn btn-dark mr-3">
                                            <Link to={{ pathname: `/details/${mobile.id}` }} className="text-white">View</Link></button>
                                        <button className="btn btn-dark" onClick={() => addToCart(mobile)}>Add to Cart</button>
                                    </div>



                                </div>)
                        })

                        }
                    </div>
                    <div className="col-sm-4"></div>
                </div>
                {footer}

            </div>)
    }
    else {
        return (
            <div>
                {header}
                <h1>No Posts Found!</h1>
                {footer}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { mobiles: state.mobiles }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getMobiles, addMobileById }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);