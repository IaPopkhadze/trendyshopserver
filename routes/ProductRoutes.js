import express from "express";
import { getCategories } from "../controllers/ProductController.js";

const ProductRouter = express.Router();

ProductRouter.get("/categories", getCategories);

export default ProductRouter;
