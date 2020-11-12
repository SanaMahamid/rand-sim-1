const express = require('express')
const router = express.Router()

const todos = []
let id = 1

router.get('/todos', function (req, res) {
    res.send(todos)
})

router.post('/todo', function (req, res) {
    const text = req.body.text
    const newTodo = { id: id++, text: text, complete: false }

    todos.push(newTodo)
    res.send(todos)
})

router.put('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const isCompleted = todos.find(t => t.id == todoID)
    isCompleted.complete = !isCompleted.complete                     
    res.send(todos)
})

router.delete('/todo/:todoID', function (req, res) {
    const todoID = req.params.todoID
    const toDelete = todos.find(t => t.id == todoID)
    let index = todos.indexOf(toDelete)
    todos.splice(index, 1)
    res.send(todos)
}) 

module.exports = router