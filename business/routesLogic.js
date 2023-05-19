import { axios, axiosTest } from '../axiosConfig.js';

const getRoute = async (body) => { 
    let api_key = process.env.ROUTES_API_KEY
    let response = await axios.post('directions/v2:computeRoutes',JSON.stringify(body), { 
        headers: { 
            "Content-Type": "application/json",
            "X-Goog-Api-Key": `${api_key}`,
            "X-Goog-FieldMask": 'routes.duration,routes.distanceMeters,routes.polyline.encodedPolyline,routes.viewport'
        }
    })
    if(response.status != 200) { 
        throw new Error(response.data)
    }
    return response.data;
}

const test = async() => { 
    let response = await axiosTest.get(`fact`)
    return response.data
}

export default { 
    getRoute,
    test
}