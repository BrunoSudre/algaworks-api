const { Usuario } = require('../models')
const { Router } = require('express')
const {Op} = require("sequelize");

const router = Router()

router.get('/', async (req, res) => {
    const { email } = req.query
    let user;

    if (email) {
         user = await Usuario.findAll({
            where: {
                email: {
                    [Op.eq]: email
                }
            }
        })
    } else {
        user = await Usuario.findAll()
    }


    res.status(200).json(user)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await Usuario.findByPk(id)
    res.status(200).json(user)
})

router.post('/', async (req, res) => {
    const { nome, email, password } = req.body
    const newUser = await Usuario.create({ nome, email, password })
    res.status(200).json(newUser)
})

router.put('/:id', async (req, res) => {
    const { nome, email, password } = req.body
    await Usuario.update(
        { nome, email, password},
        {
            where: {
                id: req.params.id
            }
        })

    res.status(200).json({message: `Usuário ${req.params.id} atualizado com sucesso!`})
})

router.delete('/:id', async (req, res) => {
    await Usuario.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({message: `Usuário ${req.params.id} deletado com sucesso!`})
})


module.exports = router