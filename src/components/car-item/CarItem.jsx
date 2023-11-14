import React from 'react'
import '../car-item/carItem.css'
import { Link } from 'react-router-dom'

function CarItem({car}) {
  return (
        <div className='item'>
            <div className="image" style={{
                backgroundImage: `url(${car.image})`
            }}/>
         <div className="info">
         <h2>{car.name}</h2>
          <p>{car.price}$</p>
          <Link className='btn' to={`/car/${car.id}`}>Read More</Link>
         </div>
      </div>
  )
}

export default CarItem