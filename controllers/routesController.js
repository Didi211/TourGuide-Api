import routesLogic from '../business/routesLogic.js';

const get = async (req,res) => { 
    try { 
        let result = await routesLogic.getRoute(req.body);
        res.status(200).send(result);
    }
    catch(error) { 
        console.log(error);
        res.status(500).send(error.message);
    }
}

const test = async (req,res) => { 
    try {
        let result = await routesLogic.test();
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

export default { 
    get,
    test
}