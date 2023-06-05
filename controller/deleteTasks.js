const Task = require('../models/task.js');

const deleteControl = {
    deleteTasks: async (req, res) => {
        try{
            const _id = req.body._id;
            console.log(_id);
            await Task.deleteOne({_id: _id});
            res.redirect('https://task-manager-6eqb.onrender.com/read');
        }catch(err){
            res.redirect('https://task-manager-6eqb.onrender.com/read');
        }
    }
}

module.exports = deleteControl
