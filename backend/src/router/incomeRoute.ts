import { Router } from "express";
import {
  createIncome,
  deleteIncome,
  findIncomeById,
  getIncomes,
  updateIncome,
} from "../controller/income";

const router = Router();

router.route("/").post(createIncome).get(getIncomes);

router.route("/").get(findIncomeById).delete(deleteIncome).put(updateIncome);

export default router;
