import { body, param, query } from "express-validator";

class TodoValidator {
  checkCreateTodo() {
    return [
      body("id").optional().isUUID(4).withMessage("the value should be in V4"),
      body("title")
        .notEmpty()
        .withMessage("The title value should not be empty"),
      body("completed")
        .optional()
        .isBoolean()
        .withMessage("this can be true or false")
        .isIn([0, false])
        .withMessage("the value must be 0 or  false"),
    ];
  }
  checkReadTodo() {
    return [
      query("limit")
        .notEmpty()
        .withMessage("The query limit should not be empty")
        .isInt({ min: 1, max: 10 })
        .withMessage("the limit value should be within 1 - 10"),
      query("offset")
        .optional()
        .notEmpty()
        .isInt({ min: 1, max: 10 })
        .withMessage("Offset can not be more than 10"),
    ];
  }
  checkIdParams() {
    return [
      param("id")
        .notEmpty()
        .withMessage("id must not be empry")
        .isUUID(4)
        .withMessage("The value uuid v4"),
    ];
  }
}

export default new TodoValidator();
