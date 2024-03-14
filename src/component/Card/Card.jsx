import React from 'react'

function Card(props) {
  console.log(props);
  return (
    <div className='card-container'>
      <div card-main>

        <h1>{props.dogdata.name}</h1>

        <img height='250px' width='200px' src={`https://cdn2.thedogapi.com/images/${props.dogdata.image.id}.jpg`} alt="" />

      </div>
    </div>
  )
}

export default Card