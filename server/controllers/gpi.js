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