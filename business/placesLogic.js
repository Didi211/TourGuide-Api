import { Client } from '@googlemaps/google-maps-services-js'


const findPlaceId = async (latLng) => { 
    let api_key = process.env.PLACES_API_KEY
    let client = new Client({});
    try { 
        let response = await client.reverseGeocode({
            params: { 
                latlng: latLng,
                key: api_key,
    
            },
        })
        let place = response.data.results[0]
        return { 
            placeId: place.place_id,
        }
    }
    catch(error) { 
        if (error.response != null) { 
            throw new Error(error.response.data.error_message)
        }
        throw error
    }
}

export default { 
    findPlaceId
}