import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({name,description,ep,img,url}) => {
  return (
    <li className='Card'>
      <Link to={url}>
        <img className='img' src={img}/>
      </Link>
    <div className='Letter'>
      <h1>
        {name}
      </h1>
      <p>
        {description}
      </p>
      <b>
        Eps:{ep}
      </b>
    </div>
      
    </li>
  )
}

export default Card