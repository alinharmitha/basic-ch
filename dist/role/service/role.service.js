"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
class RoleService {
    async listRoles() {
        return prisma_1.default.role.findMany({
            where: { isActive: true },
        });
    }
}
exports.RoleService = RoleService;
