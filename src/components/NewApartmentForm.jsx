import axios from 'axios'
import { useState } from 'react'

const NewApartmentForm = ({ fetchData }) => {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState('')
  const [pricePerDay, setPricePerDay] = useState(100)

  const handleSubmit = async event => {
    event.preventDefault()
    const newApartment = { title, img, pricePerDay }

    /* const response = await axios.post('https://ironbnb-m3.herokuapp.com/apartments', newApartment)
    console.log(response) */
    const response = await fetch('https://ironbnb-m3.herokuapp.com/apartments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newApartment),
    })
    const parsed = await response.json()
    console.log(parsed)

    fetchData()

    setTitle('')
    setImg('')
    setPricePerDay(100)
  }

  return (
    <>
      <h2>New Apartment</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label>
          Title
          <input type='text' value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Image
          <input type='text' value={img} onChange={event => setImg(event.target.value)} />
        </label>
        <label>
          Price Per Day
          <input
            type='number'
            value={pricePerDay}
            onChange={event => setPricePerDay(event.target.value)}
            step='10'
          />
        </label>

        <button type='submit'>Create</button>
      </form>
    </>
  )
}

export default NewApartmentForm
