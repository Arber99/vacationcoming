import STAT from "../models/statmodel.js"
import mongoose from 'mongoose'

export const getSTAT = async (req, res) => {

    const { aurora, beach, snow, hiking } = req.query;
    let query = {};

    aurora ? (query.aurora = aurora) : {}
    beach ? (query.beach = beach) : {}
    snow ? (query.snow = snow) : {}
    hiking ? (query.hiking = hiking) : {}

    try {
        const stat = await STAT.find({...query}).distinct('country')
        res.status(200).json(stat)
    }   
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}