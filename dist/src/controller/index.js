"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const model_1 = require("../model");
class TaskController {
    async createNew(req, res) {
        const id = (0, uuid_1.v4)();
        try {
            const record = await model_1.TodoInstance.create({ ...req.body, id });
            return res.json({ record, message: "successfully creeated" });
        }
        catch (error) {
            res.json({
                message: "fail to create ",
                status: 500,
                route: "/create",
            });
        }
    }
    async readPage(req, res) {
        try {
            const limit = req.query?.limit;
            const offset = req.query?.offset;
            const record = await model_1.TodoInstance.findAll({ where: {}, limit, offset });
            return res.json(record);
        }
        catch (error) {
            res.json({
                message: "fail to read ",
                status: 500,
                route: "/read",
            });
        }
    }
    async readSingle(req, res) {
        try {
            const { id } = req.params;
            const record = await model_1.TodoInstance.findOne({ where: { id } });
            return res.json(record);
        }
        catch (error) {
            res.json({
                message: "fail to read ",
                status: 500,
                route: "/read/:id",
            });
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params;
            const { title, completed } = req.body;
            const record = await model_1.TodoInstance.findOne({ where: { id } });
            if (!record) {
                res.json({ message: "Can not find existing record" });
            }
            const updatedRecord = await record?.update({
                title: title,
                completed: completed,
            });
            return res.json({ record: updatedRecord });
        }
        catch (error) {
            res.json({
                message: "fail to update ",
                status: 500,
                route: "/update/:id",
            });
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params;
            const record = await model_1.TodoInstance.findOne({ where: { id } });
            if (!record) {
                res.json({ message: "Can not find existing record" });
            }
            const deleted = await record?.destroy();
            return res.json({ record: deleted });
        }
        catch (error) {
            res.json({
                message: "fail to update ",
                status: 500,
                route: "/delete/:id",
            });
        }
    }
}
exports.default = new TaskController;
