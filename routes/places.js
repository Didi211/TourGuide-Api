import Router from "express";
const router = Router();
import placesController from "../controllers/placesController.js";

router.post('/getId', placesController.getId)
router.post('/nearby/', placesController.getNearbyPlaces)


export default router 