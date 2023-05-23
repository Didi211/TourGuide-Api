import Router from "express";
const router = Router();
import routeController from '../controllers/routesController.js';

router.post("/get", routeController.get);
router.get("/test", routeController.test);



export default router 