import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Podcast.css'
import Card from '../Card2/Card'

const Podcast = () => {
  const {channelId} = useParams()
  const [podcast,setPodcast] = useState()
  useEffect(() => {
    return async () => {
      // console.log(channelId)
      const {data} = await axios.get(`http://localhost:5000/${channelId}`)
      setPodcast(data.items)
    }
  }, [])
  return (
    <div className='Home'>
      <span/>
      <ul className='Podcast'>
        {podcast &&
          podcast.map(e=>(
            <Card 
              title={e.title} 
              videoThumbnails={e.videoThumbnails[0].url} 
              videoId={e.videoId} 
              publishedText={e.publishedText} 
              durationText={e.durationText}/>
            ))
          }
      </ul>
    </div>
  )
}

export default Podcast