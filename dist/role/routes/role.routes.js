"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const role_controller_1 = require("../controller/role.controller");
const router = (0, express_1.Router)();
const controller = new role_controller_1.RoleController();
router.get('/', controller.list);
exports.default = router;
