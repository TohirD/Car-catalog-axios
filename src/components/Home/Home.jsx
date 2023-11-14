import React, { useEffect, useState } from 'react'
import '../../assets/global.css'
import CarItem from '../car-item/CarItem'
import CreateCarForm from '../create-car-form/CreateCarForm'
import axios from 'axios'
import { CarService } from '../../services/car.service'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [cars, setCars] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await CarService.getAll()

      setCars(data)
    }
    fetchData()
  }, [])

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <div className='home'>
      <h1>Cars Catalog</h1>
      <button className='btn' onClick={goBack}>Forward</button>
      <CreateCarForm setCars={setCars}/>
      {cars.map(car => (
        <CarItem key={car.id} car={car}/>
      ))}
    </div>
  )
}

export default Home