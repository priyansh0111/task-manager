const Task = require('../models/task.js');

const taskControl = {
    getTasks: async (req, res) => {
        try{
            const tasks = await Task.find({});
            res.send(tasks);
        }catch(err){
            return res.status(200).json({message: err.message});
        }
    }
}

module.exports = taskControl
