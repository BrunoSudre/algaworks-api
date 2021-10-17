const { tb_conteudos: Conteudo } = require('../models')
const { Router } = require('express')
const router = Router()

router.get('/', async (req, res) => {
    const conteudo = await Conteudo.findAll()
    res.status(200).json(conteudo)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const conteudo = await Conteudo.findByPk(id)
    res.status(200).json(conteudo)
})

router.post('/', async (req, res) => {
    const { descricao, modulo_id } = req.body
    const newUser = await Conteudo.create({ descricao, modulo_id })
    res.status(200).json(newUser)
})

router.put('/:id', async (req, res) => {
    const { descricao, modulo_id } = req.body
    await Conteudo.update(
        { descricao, modulo_id },
        {
            where: {
                id: req.params.id
            }
        })

    res.status(200).json({message: `Conteudo ${req.params.id} atualizado com sucesso!`})
})

router.delete('/:id', async (req, res) => {
    await Conteudo.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({message: `Conteudo ${req.params.id} deletado com sucesso`})
})


module.exports = router