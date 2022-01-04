import axios from "axios";

const url = "http://localhost:5000"

export const getGPIs = (val) => axios.get(`${url}/gpi/${val}`);
export const getGPIcountry = (val) => axios.get(`${url}/gpi/country/${val}`);
export const getCOIs = (val) => axios.get(`${url}/coi/${val}`);
export const getCLIcountry = (val) => axios.get(`${url}/coi/country/${val}`);
export const getSTATs = (val) => axios.get(`${url}/stat${val}`);
export const getPICTUREs = (val) => axios.get(`${url}/pexel?country=${val}`);