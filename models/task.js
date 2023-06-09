const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    desc: {
        type: String, 
        required: true, 
    },
    status: {
        type: String, 
        required: true, 
    },
    date: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model("Task", taskSchema);