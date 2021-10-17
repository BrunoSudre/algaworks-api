module.exports = (sequelize, DataTypes) => {
    const Conteudo = sequelize.define('tb_conteudos', {
        descricao: DataTypes.STRING,
    })

    Conteudo.associate = (models) => {
        Conteudo.belongsTo(models.tb_modulos, {
            foreignKey: 'id',
            as: 'modulos',
            onDelete: 'CASCADE',
        });
    };

    return Conteudo;
};