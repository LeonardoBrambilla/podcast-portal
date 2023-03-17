const Podcast = require("../model/model")
const {validationResult} = require("express-validator")
const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
const ytch = require('yt-channel-info')

exports.createpodcast = async(req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const {
    name,
    img,
    description,
    ep,
    url
  } = req.body
  const podcast = new Podcast({
    name,
    img,
    description,
    ep,
    url
  })
  await podcast.save()
  res.status(201).send(podcast)
}

exports.getAll = async (req,res) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const data = await Podcast.find()
  res.status(200).send({data:data})
}

exports.getS = async (req,res) => {
  const errors = validationResult(req)
  const {channel} = req.params
  console.log(channel)
  if(!errors.isEmpty()){
    return res.status(400).json({errors:errors.array()})
  }
  const payload = {
    channelId: `${channel}`, 
    sortBy: 'newest',
    channelIdType: 0
  }
  ytch.getChannelVideos(payload).then((response) => {
    if(!response.alertMessage){
      res.status(200).send(response)
    } else {
      console.log('Channel could not be found.')
    }    
  }).catch((err) => {
    console.log(err)
  })
}

