const express = require('express');
const horariosController = require('../controllers/horarios.controller');
const router = express.Router();

router.get('/:id', horariosController.getHorariosById);
router.post('/', horariosController.createHorarios);
router.put('/:id', horariosController.updateHorarios);
router.delete('/:id', horariosController.deleteHorarios);

module.exports = router;