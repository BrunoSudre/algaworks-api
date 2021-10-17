module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('tb_cursos', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        nivel: DataTypes.STRING,
        porcDesconto: DataTypes.DOUBLE,
        precoOriginal: DataTypes.DOUBLE,
        precoPromocional: DataTypes.DOUBLE,
        urlImagem: DataTypes.STRING,
    })

    Curso.associate = (models) => {
        Curso.hasMany(models.tb_modulos, {
            foreignKey: 'id',
            as: 'modulos',
        });
    };

    return Curso;
};