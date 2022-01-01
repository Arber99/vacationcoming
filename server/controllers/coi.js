import COI from "../models/coimodel.js"
import mongoose from "mongoose"

export const getCOI = async (req, res) => {
    try {
        const coi = await COI.find()

        res.status(200).json(coi)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getCOIspecific = async (req, res) => {

    const {coiVal} = req.params

    try {
        const coi = await COI.find( { "cost_of_living_index": {$lte: coiVal}}).distinct('country')
        //const _gpi = await gpi.filter(value => value.y2020 > gpiVal)

        res.status(200).json(coi)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//! This allows for posting new COIs; however, this won't be needed, as the list is already complete

/*export const postCOI = (req, res) => {
    const coi = req.body

    const newCOI = new COI(coi)
    try {
        newCOI.save()

        res.status(201).json(newCOI)
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}
*/