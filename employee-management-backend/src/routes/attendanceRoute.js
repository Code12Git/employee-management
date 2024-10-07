const express = require('express');
const { attendanceController } = require('../controllers');
const { authenticator } = require('../middleware');
const router = express.Router();

router.post('/:id', authenticator.verifyToken, attendanceController.create);
router.get('/', authenticator.verifyTokenAndAdmin, attendanceController.getAll);
router.get('/:id', authenticator.verifyToken, attendanceController.get);
router.put('/:id', authenticator.verifyTokenAndAdmin, attendanceController.update);
router.delete('/:id', authenticator.verifyTokenAndAdmin, attendanceController.deleteOne);

module.exports = router;
