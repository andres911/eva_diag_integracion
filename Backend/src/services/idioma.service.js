const { Idiomas } = require("../models");
const { mongo } = require("mongoose");

class IdiomaService {
  crear(req, res) {
    var datos = req.body;
    try {
      const idioma = {
        descripcion: datos.descripcion,
      };
      Idiomas.create(idioma, function (err, idioma) {
        if (err) {
          return res.status(400).json({
            message: "Error al agregar el idioma",
          });
        } else {
          return res.status(200).json({
            message: "Se agrego el idioma",
            datos: idioma,
          });
        }
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error en la api de agregar idioma",
      });
    }
  }

  listar(req, res) {
    try {
      Idiomas.findOne(function (err, idiomaEncontrado) {
        if (err) {
          return res.status(500).json({
            message: "Error al lstar los idiomas",
          });
        }
        if (!idiomaEncontrado) {
          return res.status(400).json({
            message: "No hay idiomas",
          });
        }
        Idiomas.find(
          {
            idioma_id: idiomaEncontrado.idioma_id,
          },
          function (err, idiomas) {
            if (err) {
              return res.status(404).json({
                message: "Hubo un error al listar los idiomas",
              });
            } else {
              return res.status(202).json({
                message: "Lista de idiomas",
                idiomas: idiomas,
              });
            }
          }
        );
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error en la api de listar idiomas",
      });
    }
  }
}

module.exports = IdiomaService;
