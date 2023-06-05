const router = require('express').Router();
const createController = require('../controller/createTasks.js');
const taskControl = require('../controller/getTasks.js');
const createControl = require('../controller/createTasks.js');
const updateController = require('../controller/updateTasks.js');
const deleteControl = require('../controller/deleteTasks.js');

router.post('/create', createControl.createTasks);
router.get('/get', taskControl.getTasks);
// router.post('/update', updateController.updateTasks);
router.post('/delete', deleteControl.deleteTasks);

module.exports = router
