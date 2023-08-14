import { Router } from "express";
import { ControllerCandles } from "./controllers/controllerCandles";
import { ControllerData } from "./controllers/controllerAllData";


const router = Router();

const controllerCandles = new ControllerCandles()
const controllerData = new ControllerData()

router.post('/createcandles', controllerCandles.create)
router.post('/createdatatrain', controllerData.createTrain)
router.post('/createdatatrade', controllerData.createTrade)
router.post('/createdatapossiveis', controllerData.createPossiveisTrade)

export { router };

