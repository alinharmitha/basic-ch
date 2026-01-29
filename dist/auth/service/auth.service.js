"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const password_1 = require("../../utils/password");
const jwt_1 = require("../../utils/jwt");
class AuthService {
    async register(data) {
        const hashedPassword = await (0, password_1.hashPassword)(data.password);
        return prisma_1.default.employee.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                password: hashedPassword,
                // create employee details in separate table
                details: data.details
                    ? {
                        create: {
                            mobile: data.details.mobile,
                            age: data.details.age,
                            salary: data.details.salary,
                        },
                    }
                    : undefined,
                // default role assignment
                roles: {
                    create: {
                        role: {
                            connect: { name: 'employee' }, // role must exist
                        },
                    },
                },
            },
        });
    }
    //  UPDATED LOGIN WITH LOGIN HISTORY
    async login(email, password, meta) {
        const employee = await prisma_1.default.employee.findUnique({
            where: { email },
            include: {
                roles: {
                    include: { role: true },
                },
            },
        });
        //  email not found
        if (!employee) {
            throw new Error('Invalid credentials');
        }
        const isValid = await (0, password_1.comparePassword)(password, employee.password);
        //  wrong password → save failed login
        if (!isValid) {
            await prisma_1.default.employeeLoginHistory.create({
                data: {
                    employeeId: employee.id,
                    isSuccess: false,
                    ipAddress: meta?.ip,
                    userAgent: meta?.userAgent,
                },
            });
            throw new Error('Invalid credentials');
        }
        //  successful login → save history
        await prisma_1.default.employeeLoginHistory.create({
            data: {
                employeeId: employee.id,
                isSuccess: true,
                ipAddress: meta?.ip,
                userAgent: meta?.userAgent,
            },
        });
        const roles = employee.roles.map((r) => r.role.name);
        const token = (0, jwt_1.signToken)({
            id: employee.id,
            roles,
        });
        return { token };
    }
}
exports.AuthService = AuthService;
