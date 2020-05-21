import React, { useState ,useContext,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './shared.css'
import { LoginContext } from '../App'
const Header = () => {
    const name = useContext(LoginContext)
    let [loggedIn,setLoginStatus] = useState(false)

    useEffect(()=>{
        // console.log(name)
        if(name.username.username!==""){
            setLoginStatus(true)
        }
        else{
            setLoginStatus(false)
        }
    },[name])
    
    var divStyle = {
        background: 'black'
    };

    const logout = () => {
        console.log("logout")
        name.updateValue('username',"");
    }
    let loginBtn = {}
    if (loggedIn) {
        loginBtn = (<div className="dropdown col-sm-2 m-2">
            <button className="dropbtn">Username
            
                        <div className="dropdown-content">
                    <p onClick={logout}>Logout</p>


                </div>
            </button>

        </div>)
    }
    else {
        loginBtn = <div className="">

            <button className="btn" style={divStyle}>

                <Link className="text-white" to={{ pathname: '/login' }}>Login</Link>
            </button>
        </div>
    }
    return <div className="bg-dark text-white">

        <div className="row">

            <div className="col-sm-4">

                <button className="btn mt-2" style={divStyle} >

                    <Link className="text-white" to={{ pathname: '/' }}>Mobiles</Link>
                </button>
            </div>
            <div className="col-sm-4"></div>
            <div className="col-sm-4">

                {loginBtn}

            </div>

        </div>
    </div >
}

export default Header