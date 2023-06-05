const Task = require('../models/task.js');

const deleteControl = {
    deleteTasks: async (req, res) => {
        try{
            const _id = req.body._id;
            console.log(_id);
            await Task.deleteOne({_id: _id});
            res.send({"Delete": "Yes"});
        }catch(err){
            return res.status(200).json({message: err.message});
        }
    }
}

module.exports = deleteControl
