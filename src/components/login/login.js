import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { ToastsStore } from 'react-toasts';
import { LoginContext } from '../../App'

const Login = (props) => {
    const { register, handleSubmit } = useForm()
    const name = useContext(LoginContext)

    const verifyUser = (data) => {


        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }

        }
        const apiUrl = `http://localhost:3000/login?username=${data.username}&paswword=${data.password}'`;

        fetch(apiUrl, requestOptions)
            .then(response => response.json())
            .then(data => {

                if (data.length > 0) {

                    name.updateValue('username', data[0].username);
                    ToastsStore.success("Loged In Successfully")
                    localStorage.setItem("username", data[0].username)

                    props.history.push('/')
                }
                else {
                    ToastsStore.success("Username or password is incorrect")

                }
            })

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