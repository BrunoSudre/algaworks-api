module.exports = (sequelize, DataTypes) => {
    const Modulo = sequelize.define('tb_modulos', {
        nome: DataTypes.STRING,
        cargaHoraria: DataTypes.STRING,
        curso_id: DataTypes.INTEGER,
    });

    Modulo.associate = (models) => {
        Modulo.belongsTo(models.tb_cursos, {
            foreignKey: 'id',
            as: 'curso',
            onDelete: 'CASCADE',
        });

        Modulo.hasMany(models.tb_conteudos, {
            foreignKey: 'id',
            as: 'conteudos',
        });
    };

    return Modulo;
};