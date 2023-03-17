import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({videoThumbnails,title,videoId,publishedText,durationText})=> {
  return (
    <li className='Card2'>
      <Link onClick={()=>window.location.href = "https://www.youtube.com/watch?v="+videoId} to={"/"}>
        <img className='img2' src={videoThumbnails}/>
      </Link>
    <div className='Letter'>
      <h1>
        {title}
      </h1>
      <p>
        {publishedText}
      </p>
      <b>
        {durationText}
      </b>
    </div>
      
    </li>
  )
}

export default Card