const Task = require('../models/task.js');

const createControl = {
    createTasks: async (req, res) => {
        try{
            console.log(req.body);
            const {title, desc, status} = req.body;
            const date = new Date().toString();
            const task = new Task({
                title: title,
                desc: desc, 
                status: status, 
                date: date
            })
            await task.save();
            res.json({"Created Task": "Yes"});
        }catch(err){
            return res.status(200).json({message: err.message});
        }
    }
}

module.exports = createControl
