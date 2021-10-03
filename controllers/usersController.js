const { User } = require('../models')
const { Router } = require('express')

const router = Router()

router.get( '/', async(req, res) => {
    const users = await User.findAll();
    res.status(200).json(users)
})

router.get('/:id', async (req, res) => {
    const { id } = req.params
    const user = await User.findByPk(id)
    res.status(200).json(user)
})

router.post('/', async (req, res) => {
    const { name, email, password, courseId } = req.body
    const newUser = await User.create({ name, email, password, courseId})
    res.status(200).json(newUser)
})

router.put('/:id', async (req, res) => {
    const { name, email, password } = req.body
    await User.update(
        { name, email, password},
        {
            where: {
                id: req.params.id
            }
        })

    res.status(200).json({message: `User ${req.params.id} updated successfully`})
})

router.delete('/:id', async (req, res) => {
    await User.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    )
    res.status(200).json({message: `User ${req.params.id} deleted successfully`})
})


module.exports = router