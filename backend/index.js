const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

const cors = require('cors')
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions)) //

mongoose.connect('mongodb://localhost:27017/kahveDb')

const kahveSchema = new mongoose.Schema({
  thumbnail: String,
  name: String,
  price: Number,
})

const Kahve = mongoose.model('Kahve', kahveSchema)

app.get('/kahve', function (req, res) {
  Kahve.find(function (err, kahveList) {
    if (!err) {
      res.send(kahveList)
    } else {
      console.log(err)
    }
  })
})

app.get('/kahve/:id', function (req, res) {
  let _id = req.params.id
  Kahve.findById(_id, function (err, urunList) {
    if (!err) {
      res.send(urunList)
      console.log(urunList)
    } else {
      console.log(err)
    }
  })
})

const PORT = 8000 || process.env.PORT

app.listen(PORT, () => console.log(`${PORT} ayağa kaldırıldı`))
