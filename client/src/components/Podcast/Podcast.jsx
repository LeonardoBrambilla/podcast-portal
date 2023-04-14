import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './Podcast.css'
import Card from '../Card2/Card'

const Podcast = () => {
  const {channelId} = useParams()
  const [podcast,setPodcast] = useState()
  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get(`https://podcast-portal-server.vercel.app/${channelId}`)
      setPodcast(data.items)
    }
    get()
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