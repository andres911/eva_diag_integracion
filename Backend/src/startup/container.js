const { createContainer, asClass, asFunction, asValue } = require("awilix");

const config = require("../config");
const app = require(".");

const { IdiomaService } = require("../services");

const { IdiomaController } = require("../controllers");

const { IdiomaRoutes } = require("../routes/index.routes");

const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    IdiomaService: asClass(IdiomaService).singleton(),
  })
  .register({
    IdiomaController: asClass(
      IdiomaController.bind(IdiomaController)
    ).singleton(),
  })
  .register({
    IdiomaRoutes: asFunction(IdiomaRoutes).singleton(),
  });

module.exports = container;
