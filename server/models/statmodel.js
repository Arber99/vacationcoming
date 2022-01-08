import mongoose from 'mongoose'

const statSchema = mongoose.Schema({
    country: String,
    beach: Boolean,
    aurora: Boolean,
    snow: Boolean,
    hiking: Boolean,
})

const stat = mongoose.model('stat', statSchema)

export default stat