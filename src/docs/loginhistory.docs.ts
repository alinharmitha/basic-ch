export const loginHistoryDocs = {
  "/api/login-history": {
    get: {
      tags: ["LoginHistory"],
      summary: "List all login history (ADMIN)",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Login history list" },
      },
    },
  },

  "/api/login-history/me": {
    get: {
      tags: ["LoginHistory"],
      summary: "My login history",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "My login history" },
      },
    },
  },

  "/api/login-history/employee/{employeeId}": {
    get: {
      tags: ["LoginHistory"],
      summary: "Employee login history (ADMIN)",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "employeeId",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Employee login history" },
      },
    },
  },
};