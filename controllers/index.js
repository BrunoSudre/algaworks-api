const userController = require('./usuariosController')
const coursesController  = require("./cursosController");

module.exports = {
   usuarios: userController,
   cursos: coursesController
}