"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("./auth/routes/auth.routes"));
const employee_routes_1 = __importDefault(require("./employee/routes/employee.routes"));
const role_routes_1 = __importDefault(require("./role/routes/role.routes"));
const employeerole_routes_1 = __importDefault(require("./employeerole/routes/employeerole.routes"));
const loginhistory_routes_1 = __importDefault(require("./loginhistory/routes/loginhistory.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/auth', auth_routes_1.default);
app.use('/api/employees', employee_routes_1.default);
app.use('/api/roles', role_routes_1.default);
app.use('/api/employee-roles', employeerole_routes_1.default);
app.use('/api/login-history', loginhistory_routes_1.default);
exports.default = app;
