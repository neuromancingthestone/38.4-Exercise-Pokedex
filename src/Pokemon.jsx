import React from "react"
import './Pokemon.css'

const Pokemon = ({id, name, type, exp}) => {

  const ImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className="Pokemon">
      <h3>{name}</h3>
      <img src={ImgUrl} alt="" />
      <p>
        Type: {type}<br/>
        EXP: {exp}
      </p>      
  </div>
  )
}

export default Pokemon