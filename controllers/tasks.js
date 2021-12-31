const getAllTasks = (req, res) => {
    res.send('All the items')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getSingleTask = (req, res) => {
    res.json({ id: req.params.id })
}

const updateTask = (req, res) => {
    res.send('Update Task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask,
}