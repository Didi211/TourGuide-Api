import placesLogic from "../business/placesLogic.js";

const getId = async (req,res) => { 
    try { 
        let result = await placesLogic.getId(req.body)
        res.status(200).send(result)
    }
    catch(error) { 
        console.log(error)
        res.status(500).send(error.message)
    }
}

export default { 
    getId
}