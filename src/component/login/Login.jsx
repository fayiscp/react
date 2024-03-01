import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./Login.css"

function Login() {

    let [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    })

    function getData(event) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }
    console.log(data);





    return (
        <div className="login-page">

            <p>{data.username} --</p>
            <br />
            <p>{data.email} --</p>
            <br />
            <p>{data.password}-- </p>
            <div className="login-box">



                    <h1>Login Page</h1>
                <form>
    
            
                        <input onChange={getData} type="text" placeholder='Enter your username' name="username" />

                    
                        <input onChange={getData} type="password"  placeholder='Enter your password' name="password" />

                        <input onChange={getData} type="email" placeholder='Enter your em' name='email' />

                
                        <button type='submit'>Login</button>

                    <Link to='/signup'>
                        <p>Don't have an account?</p>
                        <p>Forgot password</p>
                    </Link>
                </form>
            </div>


        </div>
    )
}

export default Login
