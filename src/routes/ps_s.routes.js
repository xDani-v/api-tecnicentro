const express = require('express');
const ps_sController = require('../controllers/ps_s.controller');
const router = express.Router();

router.get('/:id', ps_sController.getPs_sById);
router.post('/', ps_sController.createPs_s);
router.put('/:id', ps_sController.updatePs_s);
router.delete('/:id', ps_sController.deletePs_s);

module.exports = router;