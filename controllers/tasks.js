const { mongoose } = require('mongoose')
const Task = require('../models/task')
const asyncWrapper = require('../middleware/async')

const { createCustomError, CustomAPIError } = require('../errors/custom-errors')

const getAllTasks = asyncWrapper(async (req, res) => {


    const allTasks = await Task.find({})
    res.status(200).json({ tasks: allTasks })

})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(200).json({ task })
})

const getSingleTask = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params

    const task = await Task.findOne({ _id: taskID })

    if (!task) {
        return next(createCustomError(`Not task with id ${taskID}`, 404))
    }
    res.status(200).json({ task })

})

const deleteTask = asyncWrapper(async (req, res) => {


    taskID = req.params.id
    const task = await Task.findOneAndDelete({ _id: taskID })

    if (!task) {

        return next(createCustomError(`Not task with id ${taskID}`, 404))

    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {

    const taskID = req.params.id
    const data = req.body
    //res.status(200).json({ id: taskID, data: data })
    const task = await Task.findOneAndUpdate({ _id: taskID }, data, { new: true, runValidators: true, useFindAndModify: false })

    if (!task) {

        return next(createCustomError(`Not task with id ${taskID}`, 404))

    }

    res.status(200).json({ task })
})

const editTask = asyncWrapper(async (req, res) => {


    const taskID = req.params.id
    const data = req.body
    //res.status(200).json({ id: taskID, data: data })
    const task = await Task.findOneAndUpdate({ _id: taskID }, data, { new: true, runValidators: true, useFindAndModify: false, overwrite: true })

    if (!task) {

        return next(createCustomError(`Not task with id ${taskID}`, 404))

    }

    res.status(200).json({ task })

})

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
    editTask,
}