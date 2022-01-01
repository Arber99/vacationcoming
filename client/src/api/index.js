import axios from "axios";

const url = "http://localhost:5000"

export const getGPIs = (val) => axios.get(`${url}/gpi/${val}`);
export const getCOIs = (val) => axios.get(`${url}/coi/${val}`);
export const getSTATs = (val) => axios.get(`${url}/stat${val}`);