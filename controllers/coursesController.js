const { Course } = require('../models')
const { Router } = require('express')

const router = Router()

router.get( '/', async(req, res) => {
    const users = await Course.findAll();
    res.status(200).json(users)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await Course.findByPk(id)
    res.status(200).json(user)
})

router.post('/', async (req, res) => {
    const { name, description } = req.body
    const newUser = await Course.create({ name, description })
    res.status(200).json(newUser)
})

router.put('/:id', async (req, res) => {
    const { name, description } = req.body
    await Course.update(
        { name, description },
        {
            where: {
                id: req.params.id
            }
        })

    res.status(200).json({message: `User ${req.params.id} updated successfully`})
})

router.delete('/:id', async (req, res) => {
    await Course.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({message: `User ${req.params.id} deleted successfully`})
})


module.exports = router