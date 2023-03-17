const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())


const {
  createpodcast,
  getAll,
  getS
} = require("../components/podcast")
  
router.get("/",getAll)
  
router.get("/:channel",getS)
  
router.post("/post",createpodcast)

module.exports = router