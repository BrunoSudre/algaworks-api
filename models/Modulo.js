module.exports = (sequelize, DataTypes) => {
    const Modulo = sequelize.define('tb_modulos', {
        nome: DataTypes.STRING,
        carga_horaria: DataTypes.STRING,
        curso_id: DataTypes.INTEGER,
    });

    Modulo.associate = (models) => {
        Modulo.belongsTo(models.tb_cursos, {
            foreignKey: 'id',
            as: 'cursos',
            onDelete: 'CASCADE',
        });

        Modulo.hasMany(models.tb_conteudos, {
            foreignKey: 'modulo_id',
            as: 'conteudos',
        });
    };

    return Modulo;
};