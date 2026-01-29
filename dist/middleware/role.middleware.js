"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireRole = void 0;
const requireRole = (roles) => {
    return (req, res, next) => {
        const userRoles = req.user?.roles || [];
        const allowed = roles.some(role => userRoles.includes(role));
        if (!allowed) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
};
exports.requireRole = requireRole;
