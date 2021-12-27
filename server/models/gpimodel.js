import mongoose from 'mongoose'

const gpiSchema = mongoose.Schema({
    y2008: Number,
    y2009: Number,
    y2010: Number,
    y2011: Number,
    y2012: Number,
    y2013: Number,
    y2014: Number,
    y2015: Number,
    y2016: Number,
    y2017: Number,
    y2018: Number,
    y2019: Number,
    y2020: Number,
    Country: String,
    iso3c: String,
})

const gpi = mongoose.model('gpi', gpiSchema)

export default gpi