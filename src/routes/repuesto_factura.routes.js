const express = require('express');
const repuestoFacturaController = require('../controllers/repuesto_factura.controller');
const router = express.Router();

router.get('/:id', repuestoFacturaController.getRepuestoFacturaById);
router.post('/', repuestoFacturaController.createRepuestoFactura);
router.put('/:id', repuestoFacturaController.updateRepuestoFactura);
router.delete('/:id', repuestoFacturaController.deleteRepuestoFactura);

module.exports = router;