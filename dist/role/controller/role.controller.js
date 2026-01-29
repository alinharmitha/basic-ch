"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleController = void 0;
const role_service_1 = require("../service/role.service");
const service = new role_service_1.RoleService();
class RoleController {
    async list(req, res) {
        const roles = await service.listRoles();
        res.json(roles);
    }
}
exports.RoleController = RoleController;
