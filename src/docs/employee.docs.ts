export const employeeDocs = {
  "/api/employees": {
    get: {
      tags: ["Employee"],
      summary: "List all employees",
      security: [{ bearerAuth: [] }],
      responses: {
        200: { description: "Employees fetched" },
      },
    },
  },

  "/api/employees/{id}": {
    get: {
      tags: ["Employee"],
      summary: "Get employee by ID",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
        },
      ],
      responses: {
        200: { description: "Employee details" },
      },
    },
  },

  "/api/employees/details": {
    post: {
      tags: ["Employee"],
      summary: "Add or update employee details",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                mobile: { type: "string" },
                age: { type: "number" },
                salary: { type: "number" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Details saved" },
      },
    },
  },
};
