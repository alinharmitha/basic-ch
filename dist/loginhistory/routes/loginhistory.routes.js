"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginhistory_controller_1 = require("../controller/loginhistory.controller");
const auth_middleware_1 = require("../../middleware/auth.middleware");
const role_middleware_1 = require("../../middleware/role.middleware");
const router = (0, express_1.Router)();
const controller = new loginhistory_controller_1.LoginHistoryController();
// Logged-in employee → own history
router.get('/me', auth_middleware_1.authMiddleware, controller.myHistory);
router.get('/', auth_middleware_1.authMiddleware, (0, role_middleware_1.requireRole)(['ADMIN']), controller.list);
// ADMIN → view any employee history
router.get('/employee/:employeeId', auth_middleware_1.authMiddleware, (0, role_middleware_1.requireRole)(['ADMIN']), controller.byEmployee);
exports.default = router;
