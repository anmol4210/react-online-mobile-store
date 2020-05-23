import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './shared.css'
import { LoginContext } from '../App'
import { ToastsStore } from 'react-toasts';

const Header = () => {
    const name = useContext(LoginContext)
    let [loggedIn, setLoginStatus] = useState(false)


    // if (localStorage.getItem("username") && (localStorage.getItem("username") !== "")) {
    //     setLoginStatus(true)
    // }

    useEffect(() => {
        // console.log("header use effect")
        // console.log(name)
        if (name.username.username && (name.username.username !== "")) {
            // console.log("header", name.username.username)
            setLoginStatus(true)
        }
        else {
            setLoginStatus(false)
        }
    }, [name])

    var divStyle = {
        background: 'black'
    };

    const logout = () => {
        // console.log("logout")
        name.updateValue('username', "");
        localStorage.clear()
        ToastsStore.success("Logged Out Successfully")
        // props.history.push('/')

    }
    let loginBtn = {}
    if (loggedIn) {
        // console.log("logged in")
        loginBtn = (<div className="dropdown col-sm-2 float-right">
            <button className="dropbtn">Hi {name.username.username.toUpperCase()}!

                <div className="dropdown-content">
                    <p onClick={logout}>Logout</p>


                </div>
            </button>

        </div>)
    }
    else {
        // console.log("logged out")
        loginBtn = <div className="col-sm-2 float-right">

            <button className="btn" style={divStyle}>

                <Link className="text-white" to={{ pathname: '/login' }}>Login</Link>
            </button>
        </div>
    }
    return <div className="bg-dark text-white">

        <div className="row">

            <div className="col-sm-2 mt-2 mb-2 align-self-center">

                <button className="btn float-left ml-2 " style={divStyle} >

                    <Link className="text-white" to={{ pathname: '/' }}>Mobiles</Link>
                </button>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-6 mt-2 mb-2 ">

                {loginBtn}

            </div>

        </div>
    </div >
}

export default Header