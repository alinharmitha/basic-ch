export const employeeRoleDocs = {
  "/api/employee-roles/assign": {
    post: {
      tags: ["EmployeeRole"],
      summary: "Assign role to employee (ADMIN)",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["employeeId", "roleId"],
              properties: {
                employeeId: { type: "number" },
                roleId: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Role assigned" },
      },
    },
  },

  "/api/employee-roles": {
    get: {
      tags: ["EmployeeRole"],
      summary: "List employee roles",
      responses: {
        200: { description: "Employee-role mapping" },
      },
    },
  },
};
