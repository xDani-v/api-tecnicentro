const express = require('express');
const serviciosController = require('../controllers/servicios.controller');
const router = express.Router();

router.get('', serviciosController.getAllServicios);
router.get('/:id', serviciosController.getServiciosById);
router.post('/', serviciosController.createServicios);
router.put('/:id', serviciosController.updateServicios);
router.delete('/:id', serviciosController.deleteServicios);

module.exports = router;