import React, { useState } from 'react'
import './Home.css'
import axios from 'axios';

function Home() {
  const [weatherdata, setWeatherData] = useState(false)
  const [inputCity, setinputCity] = useState("")

  

  const handleChange=(e)=>{
    setinputCity(e.target.value)
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleClick = async (e)=>{
    e.preventDefault()
    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${inputCity},in&appid=${process.env.REACT_APP_ACCESS_KEY}&units=metric`
    try{
      const response = await axios.get(url)
      const data = await response.data;
      setWeatherData(data)
      setinputCity("")
      
    } catch(error){
      console.log(error);
    }
  }


  return (
    <div className='container-fluid data'>
      <form style={{marginLeft: "87px"}} className="d-flex w-25" role="search">
        <input value={inputCity} onChange={handleChange} className="form-control input me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={handleClick} className="btn btn-outline-dark" type="submit">Search</button>
      </form>
      <h1 className='text-center'>{!weatherdata?"Enter the city name":null}</h1>
      <h1 className='text-center mt-5'>{!weatherdata?"":weatherdata.name}</h1>
      <div className=' w-25 row my-5' style={{margin: 'auto'}}>
      <div className='col-lg-6'>
        <img src={`http://openweathermap.org/img/wn/${!weatherdata?"":weatherdata.weather[0].icon}@2x.png`} alt="" />
        
      </div>
      <div className='col-lg-6' id='head'>
        <h1 className='heading'>{!weatherdata?"":weatherdata.main.temp+"°C"}</h1>
      </div>
      </div>
      <div className='container w-75'>
        <h3>{!weatherdata?"":capitalizeFirstLetter(weatherdata.weather[0].description)}</h3>
        <h3>{!weatherdata?"":weatherdata.main.humidity+"% Humidity"}</h3>
      </div>

    </div>
  )
}

export default Home