import { Axios } from 'axios';

const GOOGLE_API_BASE_URL = "https://routes.googleapis.com/";
const TEST_URL = "https://catfact.ninja/";

let instance = new Axios({
    baseURL: `${GOOGLE_API_BASE_URL}`
})

let testInstance = new Axios({
    baseURL: `${TEST_URL}`
});

export const axios = instance;
export const axiosTest = testInstance;