const express = require('express');
const { payrollController } = require('../controllers');
const { authenticator } = require('../middleware')
const router = express.Router();

router.post('/', authenticator.verifyTokenAndAdmin, payrollController.create);
router.get('/', authenticator.verifyTokenAndAdmin, payrollController.getAll);
router.get('/:id', authenticator.verifyToken, payrollController.get);
router.put('/:id', authenticator.verifyTokenAndAdmin, payrollController.update);
router.delete('/:id', authenticator.verifyTokenAndAdmin, payrollController.deleteOne);

module.exports = router;
