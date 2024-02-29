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
        <div className="container">
            <div className="signup-main">

                <p>{data.username}--</p>
                <p>{data.email}</p>
                <p>{data.password}</p>

            <form>
                <h1>SIGNUP PAGE</h1>

                <label for="username">USERNAME</label>
                <input onChange={getData} type="text" id="username" name="username" />

                <label for="number">NUMBER</label>
                <input onChange={getData} type="number" id="number" name="number" />

                <label for="email">EMAIL</label>
                <input onChange={getData} type="email" id="email" name="email" />

                {/* <label for="password">PASSWORD</label> */}
                <input onChange={getData} type="password" id="password" placeholder="password" name="password" />

                <button>SIGNUP</button>

                <Link to={'/login'}>

                    <button>Already Registered-Login</button>
                </Link>


            </form>
    
            </div>
        </div>
    )
}

export default Signup
