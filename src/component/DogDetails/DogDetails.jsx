import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DogDetails(){


    let {id}= useParams()

    let [details , setDetails] = useState({})

    useEffect(()=>{

        axios.get(`https://api.thedogapi.com/v1/breeds/${id}`, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": "live_lw7qSLae1MIFifqVoYgoARVeR8UmAS8d6pyRfvOwp300zlTDTA39JxBf0JCU9hzz"
            }
        }).then((res)=>{
            console.log(res);
            setDetails(res.data)
            
        }).catch(()=>{
            console.log(err);
        })
        
    },[]);


    return(
        <div className="details-container">
            <img height='300px' width='300px' src={`https://cdn2.thedogapi.com/images/${details.reference_image_id}.jpg`} alt="" />
            <h1>{details.name}</h1>
            
           
        </div>
    )
}

export default DogDetails