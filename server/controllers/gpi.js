import GPI from "../models/gpimodel.js"
import mongoose from 'mongoose'

export const getGPI = async (req, res) => {
    try {
        const gpi = await GPI.find()

        res.status(200).json(gpi)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

//! This allows for posting new GPIs; however, this won't be needed, as the list is already complete

/*export const postGPI = (req, res) => {
    const gpi = req.body

    const newGPI = new GPI(gpi)
    try {
        newGPI.save()

        res.status(201).json(newGPI)
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}
*/
export const getGPIspecific = async (req, res) => {

    const {gpiVal} = req.params

    try {
        const gpi = await GPI.find( { "y2020": {$gte: gpiVal}})
        //const _gpi = await gpi.filter(value => value.y2020 > gpiVal)

        res.status(200).json(gpi)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}