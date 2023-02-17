import { Router } from "express";
import { methods as productsController} from "../controllers/products.Controller";

const router=Router();
router.get("/api/products",productsController.getProducts);
router.get("/api/products/serviceGT50",productsController.selectProducts);
router.post("/api/dummyProducts",productsController.createDummyProduct);
router.post("/api/products/create",productsController.createProduct);
router.delete("/api/products/delete/:id",productsController.deleteProduct);

export default router;