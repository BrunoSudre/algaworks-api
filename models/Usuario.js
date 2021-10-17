module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('tb_usuarios', {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });

    return Usuario;
}