import { Router } from "express";
import { methods as SalesController} from "../controllers/Sales.Controller";

const router=Router();
router.post("/api/sales",SalesController.createTransaction);

export default router;