"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("../validator/index"));
const middleware_1 = __importDefault(require("../middleware"));
const controller_1 = __importDefault(require("../controller"));
const router = express_1.default.Router();
router.post("/create", index_1.default.checkCreateTodo(), middleware_1.default.handleValidationError, controller_1.default.createNew
// async (req: Request, res: Response) => {
//   const id = uuidv4();
//   //   console.log(req.body);
//   try {
//     const record = await TodoInstance.create({ ...req.body, id });
//     return res.json({ record, message: "successfully creeated" });
//   } catch (error) {
//     res.json({ message: "fail to create ", status: 500, route: "/create" });
//   }
// }
);
router.get("/read", index_1.default.checkReadTodo(), middleware_1.default.handleValidationError, controller_1.default.readPage
// async (req: Request, res: Response) => {
//   try {
//     const limit = req.query?.limit as number | undefined;
//     const offset = req.query?.offset as number | undefined;
//     // console.log(`page limit is ${limit}`);
//     const record = await TodoInstance.findAll({ where: {}, limit, offset });
//     return res.json(record);
//   } catch (error) {
//     res.json({
//       message: "fail to read ",
//       status: 500,
//       route: "/read",
//     });
//   }
// }
);
router.get("/read/:id", index_1.default.checkIdParams(), middleware_1.default.handleValidationError, controller_1.default.readSingle
// async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const record = await TodoInstance.findOne({ where: { id } });
//     return res.json(record);
//   } catch (error) {
//     res.json({
//       message: "fail to read ",
//       status: 500,
//       route: "/read/:id",
//     });
//   }
// }
);
router.put("/update/:id", index_1.default.checkIdParams(), middleware_1.default.handleValidationError, controller_1.default.update
// async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const { title, completed } = req.body;
//     const record = await TodoInstance.findOne({ where: { id } });
//     if (!record) {
//       res.json({ message: "Can not find existing record" });
//     }
//     const updatedRecord = await record?.update({
//       title: title,
//       completed: completed,
//     });
//     return res.json({ record: updatedRecord });
//   } catch (error) {
//     res.json({
//       message: "fail to update ",
//       status: 500,
//       route: "/update/:id",
//     });
//   }
// }
);
router.delete("/delete/:id", index_1.default.checkIdParams(), middleware_1.default.handleValidationError, controller_1.default.delete
// async (req: Request, res: Response) => {
//   try {
//     const { id } = req.params;
//     const record = await TodoInstance.findOne({ where: { id } });
//     if (!record) {
//       res.json({ message: "Can not find existing record" });
//     }
//     const deleted = await record?.destroy();
//     return res.json({ record: deleted });
//   } catch (error) {
//     res.json({
//       message: "fail to update ",
//       status: 500,
//       route: "/delete/:id",
//     });
//   }
// }
);
exports.default = router;
