const router = require('express').Router();
const taskControl = require('../controller/getTasks.js');
const createControl = require('../controller/createTasks.js');
const updateControl = require('../controller/updateTasks.js');
const deleteControl = require('../controller/deleteTasks.js');

router.post('/create', createControl.createTasks);
router.get('/get', taskControl.getTasks);
router.get('/update', updateControl.updateTasksGet);
router.post('/update', updateControl.updateTasksPost);
router.post('/delete', deleteControl.deleteTasks);

module.exports = router
