import React, { useEffect, useState } from 'react';
import Card from './Card'

function ListarPeliculas () {
    const [ personajes, setPersonajes ] = useState([]);

    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/characters?limit=25&offset=0")
        .then((response) => response.json())
        .then((data) => setPersonajes(data));
    }, []);
    return (
    <div >
    {personajes.map(personaje => {
      
      return <Card id={personaje.char_id} nickname={personaje.nickname} length={personajes.length}/ >
        ;
    })}

    </div>
    )}
  



export default ListarPeliculas