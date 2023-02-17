import { Router } from "express";
import { methods as customerController} from "../controllers/Customer.Controller";

const router=Router();
router.get("/api/customers",customerController.getCustomer);
router.get("/api/dummyCustomers",customerController.createDummyCustomer);

export default router;