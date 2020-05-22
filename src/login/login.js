import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import './login.css';
import { ToastsStore } from 'react-toasts';
// ToastsStore.success(`Order placed Successfully with ID: ${orderId}`)

import { LoginContext } from '../App'

const Login = (props) => {
    const { register, handleSubmit } = useForm()
    const name = useContext(LoginContext)
    // console.log("context", name)
    const verifyUser = (data) => {

        // event.preventDefault()
        // console.log(data)

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        }
        const apiUrl = `http://localhost:3000/login?username=${data.username}&paswword=${data.password}'`;

        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {
                // console.log(data[0])
                if (data.length > 0) {
                    // console.log("login", data[0].username)
                    name.updateValue('username', data[0].username);
                    ToastsStore.success("Loged In Successfully")
                    // toast("Loged In Successfully");
                    props.history.push('/')
                }
                else {
                    ToastsStore.success("Username or password is incorrect")
                    // toast("Username or password is incorrect");
                    // props.history.push('/login')
                }
            })




        // console.log(form)
        // console.log(this.ref.username.value)
    }
    return <div className="text-dark">

        <div className="row m-4">

            <div className="col-sm-4"></div>
            <div className="col-sm-4">


                <form onSubmit={handleSubmit(verifyUser)}>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Username</label>
                        <input type="text" ref={register} className="form-control" name="username" id="formGroupExampleInput" placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Password</label>
                        <input type="password" ref={register} className="form-control" name="password" autoComplete="true" id="formGroupExampleInput2" placeholder="password" />
                    </div>
                    <button type="submit" className="btn btn-dark">Login</button>
                </form>


            </div>
            <div className="col-sm-4"></div>
        </div>
    </div>
}

export default Login