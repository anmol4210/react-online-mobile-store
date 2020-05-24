import React, { useState, useEffect } from 'react';
import './productList.css'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMobileById, getMobiles } from '../../../actions/action'
import { ToastsStore } from 'react-toasts';


const ProductList = (props) => {
    let [mobiles, setMobiles] = useState(props.mobiles);
    let [pageNumber, setPageNumber] = useState(1)
    let minPageNumber = 1
    let maxPageNumber = 3
    useEffect(() => {

        setMobiles(props.mobiles);
    }, [props.mobiles]);



    const nextPage = (event) => {

        let obj = document.getElementById(pageNumber).parentElement
        obj.classList.remove("disabled")

        let id = event.target.id


        if (id === "prev") {
            id = pageNumber - 1
            props.getMobiles(id)
            obj = document.getElementById(id).parentElement
            obj.classList.add("disabled")

        }
        else if (id === "next") {
            id = pageNumber + 1
            props.getMobiles(id)
            obj = document.getElementById(id).parentElement
            obj.classList.add("disabled")
        }
        else {
            props.getMobiles(id)
            obj = document.getElementById(id).parentElement
            obj.classList.add("disabled")

        }
        // console.log(id)
        obj = document.getElementById("prev").parentElement
        obj.classList.remove("disabled")
        obj = document.getElementById("next").parentElement
        obj.classList.remove("disabled")

        if (id == minPageNumber) {
            obj = document.getElementById("prev").parentElement
            obj.classList.add("disabled")
        }
        else if (id == maxPageNumber) {
            obj = document.getElementById("next").parentElement
            obj.classList.add("disabled")
        }

        setPageNumber(id)
    }
    const addToCart = (mobile) => {
        let obj = props.addMobileById(mobile)

        if (obj) {
            ToastsStore.success("Product added to cart")
        }
        else {
            ToastsStore.success("Unable to add product")
        }

        if (props.mobiles.length === 1) {
            // nextPage(pageNumber + 1)
            ToastsStore.success("Go to Next Page for more products")
            props.getMobiles(pageNumber)
        }
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

        }
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
                    <p className="m-2" onClick={sort} id="low">Low to High</p>
                    <p className="m-2" onClick={sort} id="high">High to Low</p>

                </div>
            </button>
        </div>
    </div>)

    let footer = (<div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
            <nav aria-label="...">
                <ul className="pagination pagination-sm">
                    <li className="page-item disabled">
                        <div className="page-link pointer" onClick={nextPage} id="prev" >Previous</div>
                    </li>
                    <li className="page-item disabled">
                        <div className="page-link pointer" onClick={nextPage} id="1">1</div>
                    </li>
                    <li className="page-item">
                        <div className="page-link pointer" onClick={nextPage} id="2">2</div>
                    </li>
                    <li className="page-item">
                        <div className="page-link pointer" onClick={nextPage} id="3">3</div>
                    </li>

                    <li className="page-item">
                        <div className="page-link pointer" onClick={nextPage} id="next">Next</div>
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

                    <div className="col-sm-3"></div>
                    <div className="text-dark col-sm-6 m-3">
                        {mobiles.map(mobile => {
                            return (
                                <div className="row border  m-2 p-2 mr-5" key={mobile.id}>
                                    <div className="col-sm-6">
                                        <img className="mt-2" src={process.env.PUBLIC_URL + '/mobile.jpg'} alt="mobile" />
                                    </div>
                                    <div className="col-sm-6">
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
                    <div className="col-sm-3"></div>
                </div>
                {footer}

            </div>)
    }
    else {
        return (
            <div>
                {header}
                <h1>No Mobile Found! Check Next Page</h1>
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