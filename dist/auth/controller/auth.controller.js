"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("../service/auth.service");
const authService = new auth_service_1.AuthService();
class AuthController {
    async register(req, res) {
        const result = await authService.register(req.body);
        res.json(result);
    }
    async login(req, res) {
        const { email, password } = req.body;
        const result = await authService.login(email, password, {
            ip: req.ip,
            userAgent: req.headers['user-agent'],
        });
        res.json(result);
    }
}
exports.AuthController = AuthController;
