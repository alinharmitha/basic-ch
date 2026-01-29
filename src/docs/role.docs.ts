export const roleDocs = {
  "/api/roles": {
    get: {
      tags: ["Role"],
      summary: "List all roles",
      responses: {
        200: { description: "Roles list" },
      },
    },
  },
};