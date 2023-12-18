const express = require('express');
const loginController = require('../controllers/login.controller');
const router = express.Router();

router.get('/:id', loginController.getLoginById);
router.post('/', loginController.createLogin);
router.put('/:id', loginController.updateLogin);
router.delete('/:id', loginController.deleteLogin);

module.exports = router;