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
            res.redirect('https://task-manager-6eqb.onrender.com');
        }catch(err){
            res.redirect('https://task-manager-6eqb.onrender.com/read');
        }
    }
}

module.exports = createControl
