import placesLogic from "../business/placesLogic.js";
import logger from "../utils/logger.js";

const getId = async (req,res) => { 
    try { 
        logger.logAPICallRequest(`POST - getId`, req.body)
        let result = await placesLogic.getId(req.body)
        logger.logAPICallResponse('POST - getId', result)
        res.status(200).send(result)
    }
    catch(error) { 
        logger.logAPICallError(error)
        res.status(500).send(error.message)
    }
}
const getNearbyPlaces = async (req,res) => { 
    try { 
        logger.logAPICallRequest(`POST - getNearbyPlaces`, req.body)
        let result = await placesLogic.getNearPlaces(req.body)
        logger.logAPICallResponse('POST - getId', result)
        res.status(200).send(result)
    }
    catch(error) { 
        logger.logAPICallError(error)
        res.status(500).send(error.message)
    }
}

export default { 
    getId,
    getNearbyPlaces
}