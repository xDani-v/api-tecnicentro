const express = require('express');
const personalServiciosController = require('../controllers/personal.controller');
const router = express.Router();

router.get('/:id', personalServiciosController.getPersonalServiciosById);
router.post('/', personalServiciosController.createPersonalServicios);
router.put('/:id', personalServiciosController.updatePersonalServicios);
router.delete('/:id', personalServiciosController.deletePersonalServicios);

module.exports = router;