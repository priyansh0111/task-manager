const Task = require('../models/task.js');

const taskControl = {
    getTasks: async (req, res) => {
        try{
            const tasks = await Task.find({});
            res.redirect('https://task-manager-6eqb.onrender.com/read');
        }catch(err){
            res.redirect('https://task-manager-6eqb.onrender.com/read');
        }
    }
}

module.exports = taskControl
