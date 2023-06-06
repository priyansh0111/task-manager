const Task = require('../models/task.js');

const updateControl = {
    updateTasksGet: async (req, res) => {
        try{
            const _id = req.query._id;
            const filter = {
                _id: _id,
            }
            const task = await Task.findOne(filter);
            res.json(task)
        }catch(err){
            return res.status(200).json({message: err.message});
        }
    },
    updateTasksPost: async (req, res) => {
        try{
            console.log(req.body);
            const {_id, title, desc, status} = req.body;
            const date = new Date().toString();
            const update = {
                title: title,
                desc: desc,
                status: status, 
                date: date,
            }
            await Task.findOneAndUpdate({_id: _id}, update);
            res.json("update done");
        }catch(err){
            return res.status(200).json({message: err.message});
        }
    },
}

module.exports = updateControl
