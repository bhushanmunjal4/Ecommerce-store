// routes/productsRoute.js

import express from "express";
const router = express.Router();
import {
  getAllProducts,
  getProductById,
} from "../controller/productsController.js";

// Route for fetching all products
router.get("/", getAllProducts);

router.get("/:id", getProductById);

export default router;
