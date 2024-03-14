import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import './Dog.css'
import { Link } from "react-router-dom";


function Dogs() {

    let [dog, setDog] = useState([])

    useEffect(() => {
        axios.get('https://api.thedogapi.com/v1/breeds/', {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "live_lw7qSLae1MIFifqVoYgoARVeR8UmAS8d6pyRfvOwp300zlTDTA39JxBf0JCU9hzz"
            }
        }).then((res) => {
            console.log(res);
            setDog(res.data)

        }).catch(() => {
            console.log(err);
        })

    }, []);

    return (
        <div className="dog-container">
            {
                dog.map((obj, index) => {
                    return (
                        <div className="dog-card" key={index}>
                        
                            <Link to={`/${obj.id}`}>

                                <Card dogdata={obj}/>
                            </Link>
                            
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Dogs