const express = require('express')
const { getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    editTask } = require('../controllers/tasks');


const router = express.Router()

router.route('/')
    .get(getAllTasks)
    .post(createTask)

router.route('/:id')
    .get(getSingleTask)
    .patch(updateTask)
    .delete(deleteTask)
    .put(editTask)

module.exports = router