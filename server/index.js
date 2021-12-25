import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import gpi from './routes/gpi.js'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/gpi', gpi)

app.get('/', (req, res) => {
    res.send('API exists')
})

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.DATABASE_URI)
    .then(() => app.listen((PORT), () => console.log(`server is listening on PORT ${PORT}`)))
    .catch((error) => console.log(error.message))

export default app