const express = require('express');
const { employeeController } = require('../controllers');
const router = express.Router();

router.post('/', employeeController.create);
router.get('/', employeeController.getAll);
router.get('/:id', employeeController.get);
router.put('/:id', employeeController.update);
router.delete('/:id', employeeController.deleteOne);
router.get('/filter', employeeController.filter);

module.exports = router;
