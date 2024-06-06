import { Router } from "express";
import {
  addProduct,
  deleteProduct,
  findProduct,
  getProducts,
  updateProduct,
} from "../controller/product";

const router = Router();

router.route("/").post(addProduct).get(getProducts);

router.route("/").get(findProduct).post(updateProduct).delete(deleteProduct);

export default router;
