import swaggerUi from "swagger-ui-express";
import { Application } from "express";
import config from "config";
import { paths } from "../docs/index";   // merged docs

export const createSwaggerSpec = () => {
  const openApiConfig = config.get<any>("openApi");


  return {
    openapi: openApiConfig.openapi,
    info: openApiConfig.info,
    servers: openApiConfig.servers,
    components: openApiConfig.components,
    paths: {
      ...paths,
    },
  };
};

export const setupSwagger = (app: Application) => {
  const swaggerSpec = createSwaggerSpec();
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};