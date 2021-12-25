import mongoose from 'mongoose'

const gpiSchema = mongoose.Schema({
    2008: String,
    2009: String,
    2010: String,
    2011: String,
    2012: String,
    2013: String,
    2014: String,
    2015: String,
    2016: String,
    2017: String,
    2018: String,
    2019: String,
    2020: String,
    Country: String,
    iso3c: String,
})

const gpi = mongoose.model('gpi', gpiSchema)

export default gpi