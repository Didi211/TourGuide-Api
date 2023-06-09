import routesLogic from '../business/routesLogic.js';
import logger from '../utils/logger.js';

const get = async (req,res) => { 
    try { 
        logger.logAPICallRequest('POST - getRoute', req.body)
        let result = await routesLogic.getRoute(req.body);
        logger.logAPICallResponse('POST - getRoute',result)
        res.status(200).send(result);
    }
    catch(error) { 
        logger.logAPICallError(error)
        res.status(500).send(error.message);
    }
}

const test = async (req,res) => { 
    try {
        logger.logAPICallRequest('POST - test')
        let result = await routesLogic.test();
        logger.logAPICallResponse('POST - test',result)
        res.status(200).send(result);
    } catch (error) {
        logger.logAPICallError(error)    
        res.status(500).send(error.message);
    }
}

export default { 
    get,
    test
}