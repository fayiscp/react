import React from 'react'
import Card from '../Card/Card'


let obj = {
    name: 'john',
    age: 25,
    place: 'India',
    mob: '7943987869'
}

function Home() {


    return (
        <div>
            <Card data={obj} />
        </div>
    )
}

export default Home