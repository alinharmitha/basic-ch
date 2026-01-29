import express from 'express';
import authRoutes from './auth/routes/auth.routes';

import employeeRoutes from './employee/routes/employee.routes';
import roleRoutes from './role/routes/role.routes';
import employeeRoleRoutes from './employeerole/routes/employeerole.routes';
import loginHistoryRoutes from './loginhistory/routes/loginhistory.routes';
import swaggerUi from 'swagger-ui-express';
import  { createSwaggerSpec } from './utils/swagger';

const app = express();
const swaggerSpec = createSwaggerSpec();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.use('/api/employees', employeeRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/employee-roles', employeeRoleRoutes);
app.use('/api/login-history', loginHistoryRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


export default app;