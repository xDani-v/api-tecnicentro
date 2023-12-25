const express = require('express');
const mecanicoController = require('../controllers/mecanico.controller');
const router = express.Router();

router.get('/', mecanicoController.getAllMecanicos);
router.get('/:id', mecanicoController.getMecanicoById);
router.post('/', mecanicoController.createMecanico);
router.put('/:id', mecanicoController.updateMecanico);
router.delete('/:id', mecanicoController.deleteMecanico);

module.exports = router;