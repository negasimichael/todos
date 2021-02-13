const express = require('express')
const router = express.Router()
const db = require('../models')

router.get('/api/todos', async (req, res) => {
  try {
    const todos = await db.Todo.findAll()
    res.json(todos)
  } catch (err) {
    res.status(500).send(err)
  }
})

router.post('/api/todos', async (req, res) => {
  try {
    await db.Todo.create(req.body)
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

// router.put()

router.delete('/api/todos/:id', async (req, res) => {
  try {
    const id = req.params.id
    await db.Todo.destroy({
      where: { id }
    })
    res.status(200).send()
  } catch (err) {
    res.status(500).send(err)
  }
})

module.exports = router