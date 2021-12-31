import STAT from "../models/statmodel.js"
import mongoose from 'mongoose'

export const getSTAT = async (req, res) => {
    try {
        const stat = await STAT.find()

        res.status(200).json(stat)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}
