const mapNearbyPlace = (result) => { 
    return { 
        placeId: result.place_id,
        location: result.location,
        name: result.name,
        type: result.types[0],
        vicinity: result.vicinity,
        iconUrl: result.icon,
        rating: result.rating
    }
}

export default { 
    mapNearbyPlace
}