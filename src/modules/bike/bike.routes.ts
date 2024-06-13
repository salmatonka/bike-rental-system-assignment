import express from "express";
import { bikeControllers } from "./bike.controller";

const router = express.Router();

router.post("/", bikeControllers.createBike);
router.get("/bikes", bikeControllers.getAllBikes);
router.get("/bikes/:id", bikeControllers.getSingleBike);
router.put("/bikes/:id", bikeControllers.updateBike);
router.delete("/bikes/:id", bikeControllers.deleteBike);

export const bikeRoutes = router;