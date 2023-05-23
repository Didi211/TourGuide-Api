import Router from "express";
const router = Router();
import placesController from "../controllers/placesController.js";

router.post('/getId', placesController.getId)


export default router 