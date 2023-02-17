import { Router } from "express";
import { methods as productsController} from "../controllers/products.controller";

const router=Router();
console.log("paso");
router.get("/api/products",productsController.getProducts);
console.log("paso2");

export default router;