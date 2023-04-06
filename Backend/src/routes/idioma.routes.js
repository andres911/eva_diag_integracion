const { Router } = require("express");

module.exports = function ({ IdiomaController }) {
  const router = Router();
  router.post("/crearIdioma", IdiomaController.crearIdioma);
  router.get("/listarIdioma", IdiomaController.listarIdioma);
  return router;
};
