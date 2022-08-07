import express from "express";
import { Request, Response, NextFunction } from "express";
import TodoValidator from "../validator/index";
import Middleware from "../middleware";
import TaskController from "../controller";

const router = express.Router();

router.post(
  "/create",
  TodoValidator.checkCreateTodo(),
  Middleware.handleValidationError,
  TaskController.createNew
);

router.get(
  "/read",
  TodoValidator.checkReadTodo(),
  Middleware.handleValidationError,
  TaskController.readPage
);

router.get(
  "/read/:id",
  TodoValidator.checkIdParams(),
  Middleware.handleValidationError,
  TaskController.readSingle
);

router.put(
  "/update/:id",
  TodoValidator.checkIdParams(),
  Middleware.handleValidationError,
  TaskController.update
);

router.delete(
  "/delete/:id",
  TodoValidator.checkIdParams(),
  Middleware.handleValidationError,
  TaskController.delete
);

export default router;
