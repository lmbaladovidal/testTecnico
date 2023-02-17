import { Router } from "express";
import { methods as customerController} from "../controllers/Customer.Controller";

const router=Router();

router.get("/api/customers",customerController.getCustomer);
router.get("/api/customers/serviceGT20",customerController.selectCustomers);
router.get("/api/customers/serviceTransactions",customerController.selecCustomersTransaction);
router.post("/api/dummyCustomers",customerController.createDummyCustomer);
router.post("/api/customers/create",customerController.createCustomer);
router.post("/api/customers/createEvent",customerController.createEventCustomer);

export default router;