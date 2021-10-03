const { STRING } = require("sequelize");
const Course = (sequelize) => {
    return sequelize.define('Course', {
        name: STRING,
        description: STRING
    })
}

module.exports = Course