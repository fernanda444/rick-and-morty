import { useState,useEffect } from 'react'
import './style.css'

function Personajes () {
  const [data, setData] = useState([]);
  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const json = await res.json();
      setData(json.results);
    };

    obtenerDatos();
  }, []);
  return (
    <>
    {console.log(data)}
    {data.map((unpersonaje, index) => (
        <div className='c-personajes'
        key={index}>
          <p>{unpersonaje.name}</p>
          <p>{unpersonaje.id}</p>
          <p>{unpersonaje.status}</p>
          <p>{unpersonaje.species}</p>
          <p>{unpersonaje.type}</p>
          <p>{unpersonaje.gender}</p>
          <img src={unpersonaje.image} alt="" />

        </div>
      ))}
    </>
    
  )
}

export default Personajes