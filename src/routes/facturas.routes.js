const express = require('express');
const facturasController = require('../controllers/factura.controller');
const router = express.Router();

router.get('/:id', facturasController.getFacturaById);
router.post('/', facturasController.createFactura);
router.put('/:id', facturasController.updateFactura);
router.delete('/:id', facturasController.deleteFactura);

module.exports = router;