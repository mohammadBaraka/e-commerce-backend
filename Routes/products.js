import express from "express";
import {
  createProduct,
  deleteProduct,
  getAllUsers,
  getOneUsre,
  updateProduct,
} from "../controller/post.controller.js";
const router = express.Router();

router.route("/").get(getAllUsers).post(createProduct);
router.route("/:id").get(getOneUsre).put(updateProduct).delete(deleteProduct);

export default router;
