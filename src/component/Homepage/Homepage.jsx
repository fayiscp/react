import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Homepage.css'
import axios from "axios"


let noPic = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'

function Homepage() {

    let [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            console.log('helloo', res.data);
            setUsers(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    let [state, setState] = useState([
        {
            name: 'aboo',
            age: 45,
            place: 'ekm',
            profilepic: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'
        },
        {
            name: 'abu',
            age: 45,
            place: 'ekm',
            profilepic: null
        },
        {
            name: 'abi',
            age: 44,
            place: 'aluva',
            profilepic: 'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg'
        },
        {
            name: 'faiz',
            age: 42,
            place: 'edplly',
            profilepic: null
        },
        {
            name: 'boss',
            age: 40,
            place: 'klmsry',
            profilepic: null
        },

    ])

    return (
        <div className="card-container">
            {
                users.map((obj, index) => {

                    return (

                        <div className="card" key={index}>
                            <img height='105px' width='150px' src={!obj.profilepic ? noPic : obj.profilepic} alt="" />
                            <h1>{obj.title}</h1>
                            <h1>{obj.id}</h1>
                            <h1>{obj.place}</h1>


                        </div>
                    )

                })
            }
        </div>



    )

}

export default Homepage