import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './Homepage.css'
import axios from "axios"


let noPic = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'




function Homepage() {

    let [users, setUsers] = useState([])
    let [search, setSearch] = useState('')
    let [movie, setMovie] = useState({})
    let [state,setState]=useState(false)

    function getValue(event) {
        console.log(event.target.value);
        setSearch(event.target.value)
    }

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=169950b9&s=${search}`).then((res) => {
            console.log('helloo', res);
            setUsers(res.data.Search)

        }).catch((err) => {
            console.log(err);
        })

    }, [search])

    function getData(id) {
        axios.get(`http://www.omdbapi.com/?apikey=169950b9&i=${id}`).then((res) => {
            console.log('helloo', res);
            setMovie(res.data)
setState(true)
            setUsers([])

        }).catch((err) => {
            console.log(err);
        })
    }

    return (

        <div className="card-search">

            <input onChange={getValue} type="text" placeholder="search" />
            <div className="card-container">
                {
                    users?.map((obj, index) => {
                        return (
                            <h1 onClick={() => { getData(obj.imdbID) }} key={index}>{obj.Title}</h1>
                        )

                    })
                }

            </div>
{state && <div className="card" >
                <img src={movie.Poster} alt="" />
                <h3>{movie.Actors}</h3>
                <h3>{movie.Awards}</h3>
                <h3>{movie.Country}</h3>
                <h3>{movie.DVD}</h3>
                <h3>{movie.Rated}</h3>
                <h3>{movie.Director}</h3>
            </div> }
     



        </div >

    )

}

export default Homepage