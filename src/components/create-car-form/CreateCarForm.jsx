import React, { useState } from 'react'
import '../create-car-form/CreateCar.css'

const clearData = {
  price: '', 
  name: '', 
  image: ''
}

const CreateCarForm = ({setCars}) => {
    // const [name, setName] = useState('')
    // const [price, setPrice] = useState('')
    // const [image, setImage] = useState('')

    const [data, setData] = useState({
      price: '', 
      name: '', 
      image: ''
    })

    const createCar = e => {
      e.preventDefault()
      setCars(prev => [...prev, {id: prev.length + 1, ...data}])
      setData(clearData)
    }

  return (
    <form className='form'>
        <input placeholder='Name' onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name}/>
        <input placeholder='Price' onChange={e => setData(prev => ({...prev, price: e.target.value}))} value={data.price}/>
        <input placeholder='Image' onChange={e => setData(prev => ({...prev, image: e.target.value}))} value={data.image}/>

        <button onClick={e => createCar(e)}>Create</button>
    </form>
  )
}

export default CreateCarForm