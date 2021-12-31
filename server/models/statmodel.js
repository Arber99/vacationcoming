import mongoose from 'mongoose'

const statSchema = mongoose.Schema({
    country: String,
    beach: Boolean,
    aurora: Boolean,
})

const stat = mongoose.model('stat', statSchema)

export default stat