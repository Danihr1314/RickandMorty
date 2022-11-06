import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({url}) => {

  const [character, setCharacter] = useState({});

  useEffect(()=>{
    axios.get(url)
    .then(res => setCharacter(res.data));
  }, [])

  console.log(character);

  const statusColor = () =>{
    if (character.status === 'Alive'){
      return(
        <button style={{backgroundColor: '#00dc00'}}></button>
      )
    }else if( character.status === 'Dead'){
      return (
        <button style={{backgroundColor: '#ec0000'}}></button>
      )
    }else {
      return(
        <button style={{backgroundColor: '#c8c8c8'}}></button>
      )
    }
  }
  
  return (
    <div className='card'>
      <img src={character.image} alt="Character" />
      <h2>{character.name}</h2>
      <p>
        {statusColor()}
        {character.status} - {character.species}
      </p>
      <p><b>Origin</b><br></br> {character.origin?.name}</p>
      <p><b>Appearance in episodes</b> <br></br> {character.episode?.length}</p>
    </div>
  );
};

export default ResidentInfo;