import React from "react";
import './Pokedex.css'
import Pokecard from "./Pokemon"

const Pokedex = ({props}) => {
  return (
    <div className="Pokedex">
      <h1>Pokedex</h1>
        {props.map(p => (
          <Pokecard
            key={p.id} 
            id={p.id}
            name={p.name} 
            type={p.type} 
            exp={p.base_experience}
          />
        ))}
    </div>
  )
}

export default Pokedex;