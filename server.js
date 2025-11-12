const express = require('express')
const mongoose = require('mongoose')
const dotEnv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')
const runnerboardRoute = require('./routes/runnerboardRoute')

const PORT = process.env.PORT || 5000 



const app = express()

dotEnv.config()
app.use(bodyParser.json())
app.use(cors())
app.use('/runnerboard',runnerboardRoute)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected Successfully')
    })
    .catch((error) => {
        console.log(errors)
    })

app.listen(PORT,()=>{
    console.log(`Server is started and running at ${PORT}`)
})