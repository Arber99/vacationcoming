import mongoose from 'mongoose'

const coiSchema = mongoose.Schema({
    rank: Number,
    country: String,
    cost_of_living_index: Number,
    rent_index: Number,
    cost_of_living_plus_rent_index: Number,
    groceries_index: Number,
    restaurant_price_index: Number,
    local_purchasing_power_index: Number,
})

const coi = mongoose.model('coi', coiSchema)

export default coi