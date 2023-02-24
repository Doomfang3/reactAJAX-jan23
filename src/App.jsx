import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import NewApartmentForm from './components/NewApartmentForm'

function App() {
  const [apartments, setApartments] = useState([])

  const fetchData = async () => {
    /* const response = await axios.get('https://ironbnb-m3.herokuapp.com/apartments')
    setApartments(response.data) */
    const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments')
    const parsed = await response.json()
    setApartments(parsed)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    console.log(apartments)
  }, [apartments])

  return (
    <div className='App'>
      <h1>AJAX</h1>
      <NewApartmentForm fetchData={fetchData} />
      {apartments.map(apartment => (
        <div style={{ border: '1px solid white', borderRadius: '12px', marginBottom: '1rem' }}>
          <img src={apartment.img} alt='some house' style={{ height: '100px' }} />
          <h3>{apartment.title}</h3>
          <h4>{apartment.pricePerDay}</h4>
        </div>
      ))}
    </div>
  )
}

export default App
