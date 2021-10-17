const { tb_cursos: Curso } = require('../models')
const { Router } = require('express')
const {Op} = require("sequelize");

const router = Router()

router.get('/', async (req, res) => {
    const { nome } = req.query
    let curso;
    if (nome) {
        curso = await Curso.findAll({
            where: {
                nome: {
                    [Op.like]: `%${nome}%`
                }
            }
        })
    } else {
        curso = await Curso.findAll()
    }

    res.status(200).json(curso)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const curso = await Curso.findByPk(id)
    res.status(200).json(curso)
})

router.post('/', async (req, res) => {
    const { nome, descricao, nivel, porcDesconto, precoOriginal, precoPromocional, urlImagem } = req.body
    const newUser = await Curso.create({ nome, descricao, nivel, porcDesconto, precoOriginal, precoPromocional, urlImagem })
    res.status(200).json(newUser)
})

router.put('/:id', async (req, res) => {
    const { nome, descricao, nivel, porcDesconto, precoOriginal, precoPromocional, urlImagem } = req.body
    await Curso.update(
        { nome, descricao, nivel, porcDesconto, precoOriginal, precoPromocional, urlImagem },
        {
            where: {
                id: req.params.id
            }
        })

    res.status(200).json({message: `Curso ${req.params.id} atualizado com sucesso!`})
})

router.delete('/:id', async (req, res) => {
    await Curso.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({message: `Curso ${req.params.id} deletado com sucesso`})
})


module.exports = router