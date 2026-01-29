export default {
  openApi: {
    openapi: "3.0.0",
    info: {
      title: "Employee Service API",
      version: "1.0.0",
      description: "Node.js + TypeScript Backend APIs",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
};

/*  
“Config-Driven, Object-Based OpenAPI (Code-First) Swagger Setup”
*/