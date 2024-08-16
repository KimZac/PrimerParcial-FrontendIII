import React from 'react'
import CardEstilo from "../Styles/Card.module.css"

const Card = ({libro,autor,isbn}) => {
  return (
    <div className={CardEstilo.cardContainer}>
        <h4>Tu libro favorito es:</h4>
        <h3>{libro}</h3>
        <h3>del autor {autor}</h3>
        <h3>Puedes consultarlo en la biblioteca con el código ISBN: {isbn}</h3>
    </div>
  )
}

export default Card