const userController = require('./usersController')
const coursesController  = require("./coursesController");

module.exports = {
   users: userController,
   courses: coursesController
}