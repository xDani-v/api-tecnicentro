const express = require('express');
const empleadosController = require('../controllers/empleados.controller')
const router = express.Router();

router.get('/', empleadosController.getAllEmpleados);
router.get('/:id', empleadosController.getEmpleadoById);
router.post('/', empleadosController.createEmpleado);
router.put('/:id', empleadosController.updateEmpleado);
router.delete('/:id', empleadosController.deleteEmpleado);


module.exports = router;