import { Router } from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = Router();

router.get("/wines", wineController.getAllWines);
router.get("/wines/:id", wineController.getWineById);
router.post("/wines", wineController.createWine);
router.put("/wines/:id", wineController.updateWine);
router.delete("/wines/:id", wineController.deleteWine);

export default router;