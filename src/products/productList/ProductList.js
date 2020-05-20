import React, { useState, useEffect } from 'react';
import './productList.css'
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { addMobileById, fetchMobilesData } from '../../actions/action'



const ProductList = (props) => {
    var [mobiles, setMobiles] = useState(props.mobiles);
    // console.log("hello")

    useEffect(() => {
        // console.log("use effect")
        setMobiles(props.mobiles);
    }, [props.mobiles]);

    const nextPage = (event) => {
        // console.log(event.target.id)
        console.log(props)
        props.fetchMobilesData(event.target.id)

    }
    const handleFormChange = (event) => {
        // let { name, value } = event.target 
        let value = event.target.value;
        let mobiles = props.mobiles.filter(mobile => mobile.name.toLowerCase().includes(value.toLowerCase()))
        setMobiles(mobiles)

    }
    const sort = (event) => {
        let id = event.target.id
        if (id === "1") {
            // let mob = mobiles.sort((a, b) => a.price > b.price ? 1 : -1)
            // console.log(mobiles)
            const sorted = [...mobiles].sort((a, b) => {
                return a.price - b.price;
            });
            setMobiles(sorted)
            // console.log(sorted)
        }
        else if (id === "2") {
            // console.log(mobiles)
            const sorted = [...mobiles].sort((a, b) => {
                return b.price - a.price;
            });
            setMobiles(sorted)
            // console.log(sorted)
        }
        // (mobiles)
    }

    if (mobiles && mobiles.length > 0) {
        // console.log(mobiles)

        // console.log(mobiles)
        return (
            <div>
                <div className="row navbar navbar-light bg-light">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <input className="form-control " type="text" onChange={handleFormChange} placeholder="Search" />
                    </div>

                    <div className="dropdown col-sm-4">
                        <button className="dropbtn">Sort</button>
                        <div className="dropdown-content">
                            <p onClick={sort} id="1">Low to High</p>
                            <p onClick={sort} id="2">High to Low</p>

                        </div>
                    </div>
                </div>

                <div className="text-dark card-columns m-3">
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
                                    <button className="btn btn-dark">Add to Cart</button>
                                </div>



                            </div>)
                    })

                    }
                </div>

                <div className="row">
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
                </div>

            </div>)
    }
    else {
        return (
            <div>
                <div className="row navbar navbar-light bg-light">
                    <div className="col-sm-9"></div>
                    <div className="col-sm-3">
                        <input className="form-control mr-sm-2" type="text" onChange={handleFormChange} placeholder="Search" />
                    </div>
                </div>
                No Posts Found
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { mobiles: state.mobiles }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchMobilesData, addMobileById }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);