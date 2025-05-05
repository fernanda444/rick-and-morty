import { useState, useEffect } from 'react';
import './style.css';

function Personajes() {
  const [data, setData] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/character`);
      const json = await res.json();
      setData(json.results);
    };

    obtenerDatos();
  }, []);


  let resultados = data;

  if (busqueda.length >= 3 ) {
    resultados = data.filter(pokemon =>                            /*este es el if para la busquedad  */
      pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
    );
  }

  return (
    <>
    <input
        type="text"
        placeholder="Buscar"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="c-buscador"
      />
      <h1 className="titulo">Personajes</h1>

      <div className="contenedor-personajes">
        {resultados.length === 0 ? (
  <p>No se encontraron personajes</p>
) : (
  resultados.map((unpersonaje) => (
    <div className="c-personajes" key={unpersonaje.id}>
      <p>{unpersonaje.name}</p>
      <p>{unpersonaje.id}</p>
      <p>{unpersonaje.status}</p>
      <p>{unpersonaje.species}</p>
      <p>{unpersonaje.gender}</p>
      <img src={unpersonaje.image} alt={unpersonaje.name} />
    </div>
  ))
)}

      </div>
    </>
  );
}




export default Personajes;
