let _idiomaservice = null;
class IdiomaController {
  constructor({ IdiomaService }) {
    _idiomaservice = IdiomaService;
  }
  crearIdioma(req, res) {
    return _idiomaservice.crear(req, res);
  }
  listarIdioma(req, res) {
    return _idiomaservice.listar(req, res);
  }
}

module.exports = IdiomaController;
