const express = require('express');
const repuestosController = require('../controllers/repuestos.controller');
const router = express.Router();

router.get('/:id', repuestosController.getRepuestosById);
router.post('/', repuestosController.createRepuestos);
router.put('/:id', repuestosController.updateRepuestos);
router.delete('/:id', repuestosController.deleteRepuestos);

module.exports = router;