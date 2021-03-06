const { tb_modulos: Modulo, tb_conteudos: Conteudo } = require('../models')
const { Router } = require('express')
const {Op} = require("sequelize");

const router = Router()

router.get('/', async (req, res) => {
    const { nome } = req.query
    let modulo;
    if (nome) {
        modulo = await Modulo.findAll({
            where: {
                nome: {
                    [Op.like]: `%${nome}%`
                }
            }
        })
    } else {
        modulo = await Modulo.findAll({
            include: {model: Conteudo, as: 'conteudos'}
        })
    }

    res.status(200).json(modulo)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const modulo = await Modulo.findByPk(id)
    res.status(200).json(modulo)
})

router.post('/', async (req, res) => {
    const newUser = await Modulo.create({ ...req.body })
    res.status(200).json(newUser)
})

router.put('/:id', async (req, res) => {
    await Modulo.update(
        { ...req.body },
        {
            where: {
                id: req.params.id
            }
        })

    res.status(200).json({message: `Modulo ${req.params.id} atualizado com sucesso!`})
})

router.delete('/:id', async (req, res) => {
    await Modulo.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({message: `Modulo ${req.params.id} deletado com sucesso`})
})


module.exports = router