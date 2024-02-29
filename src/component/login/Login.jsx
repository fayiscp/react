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
        <div className="main">

            <p>{data.username} --</p>
            <br />
            <p>{data.email} --</p>
            <br />
            <p>{data.password}-- </p>
            <div className="hello">



                <form>
                    <h1>Login Page</h1>
                    <div className='uname'>
                        <label for="username">username</label>
                        <input onChange={getData} type="text" id="username" name="username" />

                        <label for="password">password</label>
                        <input onChange={getData} type="password" id="password" name="password" />

                        <label for="email">Email</label>
                        <input onChange={getData} type="email" id='email' name='email' />

                    </div>
                    <div className="login-button">
                        <button>Login</button>
                    </div>

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