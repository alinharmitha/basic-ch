"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const employee_service_1 = require("../service/employee.service");
const service = new employee_service_1.EmployeeService();
class EmployeeController {
    async saveDetails(req, res) {
        const employeeId = req.user.id;
        const result = await service.upsertDetails(employeeId, req.body);
        res.json(result);
    }
    async list(req, res) {
        const result = await service.listEmployees();
        res.json(result);
    }
    async getById(req, res) {
        const employeeId = Number(req.params.id);
        const employee = await service.getEmployeeById(employeeId);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.json(employee);
    }
}
exports.EmployeeController = EmployeeController;
