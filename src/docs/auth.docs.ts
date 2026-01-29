export const authDocs = {
  "/api/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Register employee",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["fullName", "email", "password"],
              properties: {
                fullName: { type: "string" },
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        201: { description: "Registered successfully" },
      },
    },
  },

  "/api/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Login employee",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["email", "password"],
              properties: {
                email: { type: "string" },
                password: { type: "string" },
              },
            },
          },
        },
      },
      responses: {
        200: { description: "Login successful" },
      },
    },
  },
};