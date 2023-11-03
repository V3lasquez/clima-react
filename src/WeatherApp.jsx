import { useState } from "react"

export const WeatherApp = () => {
    const baseURL ='https://api.openweathermap.org/data/2.5/weather'
    const API_KEY ='d2b9dea18461fee0fa480008f4e1c92b'
    const defKelvin='273.15'
    const[ciudad, setCiudad] = useState('')
    const [dataClima, setDataClima] = useState(null)
    const onInputChange=(e)=>{
        setCiudad(e.target.value)
    }
    const fetchClima=async()=>{
        try{
            const response = await fetch(`${baseURL}?q=${ciudad}&appid=${API_KEY}`)
            const data = await response.json()
            setDataClima(data)
        }catch(error){
            console.log(error)
        }
    }
    const handleClima=(e)=>{
        e.preventDefault()
        if(ciudad.length>0) fetchClima()
    }


  return (
    <div className="container">
        <h1>Aplicacion de clima</h1>
        <form onSubmit={handleClima}>
            <input type='text' value={ciudad} onChange={onInputChange}/>
            <button type="submit">Buscar</button>
        </form>
        {dataClima && (
        <div>
            <h2>{dataClima.name}</h2>
            <p>Temperatura: {parseInt(dataClima.main.temp - 273.15)}º Celcius</p>
            <p>Descripcion: {parseInt(dataClima.weather[0].description)}</p>
            <p>Descripcion: {parseInt(dataClima.weather[0].icon)}</p>
        </div>)}
    </div>
    
  )
}
