"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_config_1 = __importDefault(require("./config/database.config"));
const routes_1 = __importDefault(require("./routes"));
database_config_1.default.sync()
    .then(() => {
    console.log("connecting to database");
})
    .catch((err) => console.log(err));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const app = (0, express_1.default)();
const port = process.env.PORT || 5105;
app.use(express_1.default.json());
app.use("/api/v1", routes_1.default);
// app.get("/", (req: Request, res: Response) => {
//   return res.send("Hello");
// });
/*
app.post(
  "/create",
  TodoValidator.checkCreateTodo(),
  Middleware.handleValidationError,
  TaskController.createNew

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

app.get(
  "/read",
  TodoValidator.checkReadTodo(),
  Middleware.handleValidationError,
  TaskController.readPage

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

app.get(
  "/read/:id",
  TodoValidator.checkIdParams(),
  Middleware.handleValidationError,
  TaskController.readSingle

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

app.put(
  "/update/:id",
  TodoValidator.checkIdParams(),
  Middleware.handleValidationError,
  TaskController.update

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

app.delete(
  "/delete/:id",
  TodoValidator.checkIdParams(),
  Middleware.handleValidationError,
  TaskController.delete

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
*/
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
