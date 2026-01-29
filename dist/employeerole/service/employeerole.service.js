"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeRoleService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
class EmployeeRoleService {
    async assignRole(employeeId, roleId) {
        return prisma_1.default.employeeRole.create({
            data: { employeeId, roleId },
        });
    }
    async listEmployeeRoles() {
        return prisma_1.default.employeeRole.findMany({
            include: {
                employee: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                    },
                },
                role: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
    }
}
exports.EmployeeRoleService = EmployeeRoleService;
