const express = require('express');
const { employeeController } = require('../controllers');
const { authenticator } = require('../middleware')
const router = express.Router();

router.post('/', authenticator.verifyTokenAndAdmin, employeeController.create);
router.get('/', authenticator.verifyTokenAndAdmin, employeeController.getAll);
router.get('/:id', authenticator.verifyToken, employeeController.get);
router.put('/:id', authenticator.verifyTokenAndAdmin, employeeController.update);
router.delete('/:id', authenticator.verifyTokenAndAdmin, employeeController.deleteOne);
router.get('/filter', authenticator.verifyTokenAndAdmin, employeeController.filter);

module.exports = router;
