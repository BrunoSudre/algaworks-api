module.exports = (sequelize, DataTypes) => {
    const Curso = sequelize.define('tb_cursos', {
        nome: DataTypes.STRING,
        descricao: DataTypes.STRING,
        nivel: DataTypes.STRING,
        porc_desconto: DataTypes.DOUBLE,
        preco_original: DataTypes.DOUBLE,
        preco_promocional: DataTypes.DOUBLE,
        url_imagem: DataTypes.STRING,
    })

    Curso.associate = (models) => {
        Curso.hasMany(models.tb_modulos, {
            foreignKey: 'curso_id',
            as: 'modulos',
        });
    };

    return Curso;
};