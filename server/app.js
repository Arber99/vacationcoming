//! This code is made for the serverless architecture. It is almost indentical to the index.js
//! This code is pushed to production

import sls from 'serverless-http';
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import gpi from './routes/gpi.js'
import coi from './routes/coi.js'
import stat from './routes/stat.js'
import pexel from './routes/pexel.js'
import mongoose from 'mongoose'

const app = express()
dotenv.config()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/gpi', gpi)
app.use('/coi', coi)
app.use('/stat', stat)
app.use('/pexel', pexel)

app.get('/', (req, res) => {
    res.status(200).send('API exists')
})

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.DATABASE_URI)

const handler = sls(app)

export {handler}