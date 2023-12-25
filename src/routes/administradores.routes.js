const express = require('express');
const administradoresController = require('../controllers/administradores.controller');
const router = express.Router();

router.get('', administradoresController.getAllAdministradores);
router.get('/:id', administradoresController.getAdministradorById);
router.post('/', administradoresController.createAdministrador);
router.put('/:id', administradoresController.updateAdministrador);
router.delete('/:id', administradoresController.deleteAdministrador);

module.exports = router;