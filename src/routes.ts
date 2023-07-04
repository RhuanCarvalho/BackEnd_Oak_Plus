import { Router } from "express";
import { ControllerCreateGeneration } from "./controllers/ControllerCreateGeneration"; 
import { ControllerCreateGenoma } from './controllers/ControllerCreateGenoma';
import { ControllerCreateTraining } from './controllers/ControllerCreateTraining';
import { ControllerCreateHistoryTrade } from './controllers/ControllerCreateHistoryTrade';
import { ControllerCreateDia } from './controllers/ControllerCreateDia';
import { ControllerCreateCandle } from './controllers/ControllerCreateCandle';
import { ControllerShowGenerations } from "./controllers/ControllerShowGenerations";
import { ControllerShowGenomas } from "./controllers/ControllerShowGenomas";
import { ControllerShowTrainings } from "./controllers/ControllerShowTrainings";
import { ControllerShowGraphProcentDays } from "./controllers/ControllerShowGraphPorcentDays";
import { ControllerShowGraphDrawdown } from './controllers/ControllerShowGraphDrawdown';
import { ControllerShowGraphTrainings } from './controllers/ControllerShowGraphTrainings';
import { ControllerShowHistoryTrades } from './controllers/ControllerShowHistoryTrades';
import { ControllerShowGraphTrade } from './controllers/ControllerShowGraphTrade';
import { ControllerCreateTrainingOfTest } from "./controllers/ControllerCreateTrainingOfTests";
import { ControllerCreateHistoryTradeOfTest } from './controllers/ControllerCreateHistoryTradeOfTests';
import { ControllerShowTrainingsOfTest } from './controllers/ControllerShowTrainingsOfTest';
import { ControllerShowGraphTrainingsOfTest } from './controllers/ControllerShowGraphTrainingsOfTest';
import { ControllerShowHistoryTradesOfTest } from './controllers/ControllerShowHistoryTradesOfTest';
import { ControllerShowGraphTradeOfTest } from './controllers/ControllerShowGraphTradeOfTest';
import { ControllerShowGraphEvulotionMoneyInDay } from './controllers/ControllerShowGraphEvulotionMoneyInDay';
import { ControllerShowGraphEvulotionMoneyInDayOfTest } from './controllers/ControllerShowGraphEvulotionMoneyInDayOfTest'
import { ControllerShowGenoma } from "./controllers/ControllerShowGenoma";


const router = Router();

const controllerCreateGeneration = new ControllerCreateGeneration();
const controllerCreateGenoma = new ControllerCreateGenoma();
const controllerCreateTraining = new ControllerCreateTraining();
const controllerCreateHistoryTrade = new ControllerCreateHistoryTrade();
const controllerCreateDia = new ControllerCreateDia();
const controllerCreateCandle = new ControllerCreateCandle();

const controllerCreateTrainingOfTest = new ControllerCreateTrainingOfTest();
const controllerCreateHistoryTradeOfTest = new ControllerCreateHistoryTradeOfTest();

const controllerShowGenerations = new ControllerShowGenerations();
const controllerShowGenomas = new ControllerShowGenomas();
const controllerShowGenoma= new ControllerShowGenoma();
const controllerShowTrainings = new ControllerShowTrainings();
const controllerShowGraphProcentDays = new ControllerShowGraphProcentDays();
const controllerShowGraphDrawdown = new ControllerShowGraphDrawdown();
const controllerShowGraphTrainings = new ControllerShowGraphTrainings();
const controllerShowHistoryTrades = new ControllerShowHistoryTrades();
const controllerShowGraphTrade = new ControllerShowGraphTrade();
const controllerShowGraphEvulotionMoneyInDay = new ControllerShowGraphEvulotionMoneyInDay();

const controllerShowTrainingsOfTest = new ControllerShowTrainingsOfTest();
const controllerShowHistoryTradesOfTest = new ControllerShowHistoryTradesOfTest();
const controllerShowGraphTradeOfTest = new ControllerShowGraphTradeOfTest();
const controllerShowGraphTrainingsOfTest = new ControllerShowGraphTrainingsOfTest();
const controllerShowGraphEvulotionMoneyInDayOfTest = new ControllerShowGraphEvulotionMoneyInDayOfTest();



router.post("/generation", controllerCreateGeneration.create);
router.post("/genoma", controllerCreateGenoma.create);
router.post("/training", controllerCreateTraining.create);
router.post("/historytrade", controllerCreateHistoryTrade.create);
router.post("/dia", controllerCreateDia.create);
router.post("/candles", controllerCreateCandle.create);

router.post("/historytradeoftest", controllerCreateHistoryTradeOfTest.create);
router.post("/trainingoftest", controllerCreateTrainingOfTest.create);

router.get("/getGenerations", controllerShowGenerations.showAll);
router.get("/getGenomas/:id", controllerShowGenomas.showAll);
router.get("/getGenoma/:id", controllerShowGenoma.showAll);
router.get("/getTrainings/:id", controllerShowTrainings.showAll);
router.get("/getGraphShowGenoma/:id", controllerShowGraphProcentDays.showAll);
router.get("/getGraphShowDrawdown/:id", controllerShowGraphDrawdown.showAll);
router.get("/getShowGraphTrainings/:id", controllerShowGraphTrainings.showAll);
router.get("/getShowHistoryTrades/:id", controllerShowHistoryTrades.showAll);
router.get("/getShowGraphTrade/:id", controllerShowGraphTrade.showAll);
router.get("/getGraphShowEvulotionMoneyInDay/:id", controllerShowGraphEvulotionMoneyInDay.showAll);

router.get("/getTrainingsOfTest", controllerShowTrainingsOfTest.showAll);
router.get("/getShowHistoryTradesOfTest/:id", controllerShowHistoryTradesOfTest.showAll);
router.get("/getShowGraphTrainingsOfTest/:id", controllerShowGraphTrainingsOfTest.showAll);
router.get("/getShowGraphTradeOfTest/:id", controllerShowGraphTradeOfTest.showAll);
router.get("/getGraphShowEvulotionMoneyInDayOfTest/:id", controllerShowGraphEvulotionMoneyInDayOfTest.showAll);

export { router };

