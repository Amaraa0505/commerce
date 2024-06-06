import { Router } from "express";
import { createOrder, getOrders } from "../controller/order";

const router = Router();

router.route("/").post(createOrder).get(getOrders);

export default router;
