"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoleController = void 0;
const employeerole_service_1 = require("../service/employeerole.service");
const service = new employeerole_service_1.EmployeeRoleService();
class EmployeeRoleController {
    async assign(req, res) {
        const { employeeId, roleId } = req.body;
        const result = await service.assignRole(employeeId, roleId);
        res.json(result);
    }
    async list(req, res) {
        const result = await service.listEmployeeRoles();
        res.json(result);
    }
}
exports.EmployeeRoleController = EmployeeRoleController;
