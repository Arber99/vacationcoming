import { request } from "express"
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config()

const headers = {
        'Content-Type': 'application/json',
        'Authorization': process.env.API_KEY
    }

export const getPICTUREs = async(req, res) => {
    axios.get('https://api.pexels.com/v1/search?query=nature&per_page=1',
        { headers: headers})
        .then(response => {
            console.log(response.data)
        res.status(200).send(response.data);
      })
      .catch(error => {
        res.status(404).send(error);
      })}