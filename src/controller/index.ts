import express, { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "../model";

class TaskController {
  async createNew(req: Request, res: Response) {
    const id = uuidv4();
    try {
      const record = await TodoInstance.create({ ...req.body, id });
      return res.json({ record, message: "successfully creeated" });
    } catch (error) {
      res.json({
        message: "fail to create ",
        status: 500,
        route: "/create",
      });
    }
  }

  async readPage(req: Request, res: Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const record = await TodoInstance.findAll({ where: {}, limit, offset });
      return res.json(record);
    } catch (error) {
      res.json({
        message: "fail to read ",
        status: 500,
        route: "/read",
      });
    }
  }

  async readSingle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await TodoInstance.findOne({ where: { id } });
      return res.json(record);
    } catch (error) {
      res.json({
        message: "fail to read ",
        status: 500,
        route: "/read/:id",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, completed } = req.body;
      const record = await TodoInstance.findOne({ where: { id } });

      if (!record) {
        res.json({ message: "Can not find existing record" });
      }
      const updatedRecord = await record?.update({
        title: title,
        completed: completed,
      });

      return res.json({ record: updatedRecord });
    } catch (error) {
      res.json({
        message: "fail to update ",
        status: 500,
        route: "/update/:id",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const record = await TodoInstance.findOne({ where: { id } });

      if (!record) {
        res.json({ message: "Can not find existing record" });
      }
      const deleted = await record?.destroy();

      return res.json({ record: deleted });
    } catch (error) {
      res.json({
        message: "fail to update ",
        status: 500,
        route: "/delete/:id",
      });
    }
  }
}
 
export default new TaskController;
