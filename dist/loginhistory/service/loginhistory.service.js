"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginHistoryService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
class LoginHistoryService {
    async getMyHistory(employeeId) {
        return prisma_1.default.employeeLoginHistory.findMany({
            where: { employeeId },
            orderBy: { loginAt: 'desc' },
        });
    }
    async getHistoryByEmployee(employeeId) {
        return prisma_1.default.employeeLoginHistory.findMany({
            where: { employeeId },
            orderBy: { loginAt: 'desc' },
        });
    }
    async listAll() {
        return prisma_1.default.employeeLoginHistory.findMany({
            include: {
                employee: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                    },
                },
            },
            orderBy: {
                loginAt: 'desc',
            },
        });
    }
}
exports.LoginHistoryService = LoginHistoryService;
