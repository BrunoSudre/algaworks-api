const userController = require('./usuariosController')
const cursosController  = require("./cursosController");
const modulosController  = require("./modulosController");
const conteudosController  = require("./conteudosController");

module.exports = {
   usuarios: userController,
   cursos: cursosController,
   modulos: modulosController,
   conteudos: conteudosController,
}