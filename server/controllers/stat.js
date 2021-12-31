import STAT from "../models/statmodel.js"
import mongoose from 'mongoose'

export const getSTAT = async (req, res) => {

    const { aurora, beach } = req.query;
    let query = {};

    aurora ? (query.aurora = aurora) : {}
    beach ? (query.beach = beach) : {}

    try {
        const stat = await STAT.find({...query})
        res.status(200).json(stat)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}