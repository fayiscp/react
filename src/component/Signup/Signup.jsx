import React, { useState } from "react";
import { Link } from "react-router-dom";


function Signup() {


    let [data,setData] = useState({
        username:'',
        email:'',
        password:''

    })

    function getData(event){
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
        console.log(data);
    }

    return (
        <div className="signup-main">
            <div className="signup-box">

                <p>{data.username}--</p>
                <p>{data.email}</p>
                <p>{data.password}</p>

                <h1>SIGNUP PAGE</h1>
            <form>

                <input onChange={getData} type="text" placeholder="Username" name="username" />

                <input onChange={getData} type="number" placeholder="Number"  name="number" />

                <input onChange={getData} type="email" placeholder="email" name="email" />

                <input onChange={getData} type="password"  placeholder="password" name="password" />

                <button type="submit">SIGNUP</button>

                <Link to={'/login'}>

                    <button>Already Registered-Login</button>
                </Link>


            </form>
    
            </div>
        </div>
    )
}

export default Signup
