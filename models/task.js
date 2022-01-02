const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({

    name: {
        type: String,
        // Validators
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'Name cannot be more than 20 characters'],


    },
    completed: {
        // Validators
        type: Boolean,
        default: false,

    },

})

module.exports = mongoose.model('Task', TaskSchema)