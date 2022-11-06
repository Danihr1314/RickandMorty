import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import ResidentInfo from './components/ResidentInfo'
import hero from './assets/hero.jpg'

function App() {
  
  const [location, setLocation] = useState({});
  const [typeId, setTypeId] = useState("");

  useEffect(()=>{
    const randomIndex = Math.floor(Math.random()* 126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomIndex}`)
      .then(res => setLocation(res.data))
  },[])

  console.log(location);

  const searchLocation = ()=>{
    axios.get(`https://rickandmortyapi.com/api/location/${typeId}`)
      .then(res => setLocation(res.data))
  }

  return (
    <div className="App">
      <img src={hero} alt="" />
      <div className='info'>
        <div>
          <p><b>Name: </b>{location.name}</p>
          <p><b>Type:</b> {location.type} </p>
          <p><b>Dimension:</b> {location.dimension}</p>
          <p><b>Residents:</b> {location.residents?.length}</p>
        </div>
      </div>
      <div className='search-input'>
        <input 
          type="text" 
          value={typeId} 
          placeholder='Search by ID' 
          onChange={e=> setTypeId(e.target.value)} 
          style={{color: 'gray', height: '45px', width: '890px', textAlign:'center'}}
        />
        <button onClick={searchLocation}>Search</button>
      </div>
      <div className='character'>
      {location.residents?.map((resident) =>(
        <ResidentInfo 
          url={resident}
          key={resident}
        />
      ))}
      </div>
    </div>
  )
}

export default App
