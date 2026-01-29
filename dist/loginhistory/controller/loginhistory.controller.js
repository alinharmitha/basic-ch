"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHistoryController = void 0;
const loginhistory_service_1 = require("../service/loginhistory.service");
const service = new loginhistory_service_1.LoginHistoryService();
class LoginHistoryController {
    async myHistory(req, res) {
        const employeeId = req.user.id;
        const history = await service.getMyHistory(employeeId);
        res.json(history);
    }
    async byEmployee(req, res) {
        const employeeId = Number(req.params.employeeId);
        const history = await service.getHistoryByEmployee(employeeId);
        res.json(history);
    }
    async list(req, res) {
        const history = await service.listAll();
        res.json(history);
    }
}
exports.LoginHistoryController = LoginHistoryController;
