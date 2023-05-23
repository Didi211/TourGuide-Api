import Router from "express";
const router = Router();
import routeController from '../controllers/routesController.js';
import placesController from "../controllers/placesController.js";

router.post("/get", routeController.get);
router.get("/test", routeController.test);

router.post('/findPlaceId', placesController.findPlaceId)

export default router 