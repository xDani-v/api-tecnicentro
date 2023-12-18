const express = require('express');
const clienteVehiculoController = require('../controllers/cliente_vehiculo.controller');
const router = express.Router();

router.get('/:id', clienteVehiculoController.getClienteVehiculoById);
router.post('/', clienteVehiculoController.createClienteVehiculo);
router.put('/:id', clienteVehiculoController.updateClienteVehiculo);
router.delete('/:id', clienteVehiculoController.deleteClienteVehiculo);

module.exports = router;