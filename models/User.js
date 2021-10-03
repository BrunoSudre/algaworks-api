const { STRING, INTEGER } = require('sequelize');

const User = (sequelize) => {
    return sequelize.define('User', {
        name: STRING,
        email: STRING,
        password: STRING,
        courseId: {
            type: INTEGER,
            references: {
                model: 'Course',
                key: 'id'
            }
        }
    })
}

module.exports = User