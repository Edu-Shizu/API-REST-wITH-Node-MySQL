import { Router } from "express";
import {
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployees,
} from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id", getEmployee);
router.post("/employees", createEmployee);
router.patch("/employee/:id", updateEmployee);
router.delete("/employee/:id", deleteEmployee);

export default router;
