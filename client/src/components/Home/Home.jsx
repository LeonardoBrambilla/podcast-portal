import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Card from '../Card1/Card'
import './Home.css'

export const Home = () => {
  const [podcast,setPodcast] = useState()
  useEffect(() => {
    const get = async () => {
      const {data} = await axios.get("https://podcast-portal-server.vercel.app/")
      setPodcast(data.data)
    } 
    get()
  }, [])
  return (
    <div className='Home'>
      <span/>
      <h1 className='h1'>
      <b>
        Wellcome to <b className='podcast'>PodcastLib</b>
      </b>
      <b>
        the podcast portal
      </b>
      </h1>
      <h2>
        Podcast:
      </h2>
      <ul className='Cards'>
        {podcast && podcast.map(e=> (
        <Card name={e.name} description={e.description} ep={e.ep} img={e.img} url={e.url}/>
          ))}
      </ul>
    </div>
  )
}
