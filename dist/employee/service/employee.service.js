"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
class EmployeeService {
    async upsertDetails(employeeId, data) {
        return prisma_1.default.employeeDetails.upsert({
            where: { employeeId },
            update: data,
            create: {
                employeeId,
                ...data,
            },
        });
    }
    async listEmployees() {
        return prisma_1.default.employee.findMany({
            select: {
                id: true,
                fullName: true,
                email: true,
                isActive: true,
                roles: {
                    select: {
                        role: { select: { name: true } },
                    },
                },
            },
        });
    }
    async getEmployeeById(employeeId) {
        return prisma_1.default.employee.findUnique({
            where: { id: employeeId },
            include: {
                details: true,
                roles: {
                    include: {
                        role: {
                            select: { id: true, name: true },
                        },
                    },
                },
            },
        });
    }
}
exports.EmployeeService = EmployeeService;
