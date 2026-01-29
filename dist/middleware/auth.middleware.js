"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwt_1 = require("../utils/jwt");
const authMiddleware = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth)
        return res.status(401).json({ message: 'No token' });
    const token = auth.split(' ')[1];
    try {
        const decoded = (0, jwt_1.verifyToken)(token);
        req.user = {
            id: decoded.id,
            roles: decoded.roles,
        };
        next();
    }
    catch {
        res.status(401).json({ message: 'Invalid token' });
    }
};
exports.authMiddleware = authMiddleware;
