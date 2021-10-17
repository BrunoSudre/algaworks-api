module.exports = (sequelize, DataTypes) => {
    const Conteudo = sequelize.define('tb_conteudos', {
        descricao: DataTypes.STRING,
    })

    Conteudo.associate = (models) => {
        Conteudo.belongsTo(models.tb_modulos, {
            foreignKey: 'id',
            as: 'modulo',
            onDelete: 'CASCADE',
        });
    };

    return Conteudo;
};