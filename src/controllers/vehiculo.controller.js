const Vehiculo = require('../models/Vehiculo');

exports.getVehiculoById = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByPk(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ error: 'Vehiculo not found' });
        }
        res.json(vehiculo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.create(req.body);
        res.status(201).json(vehiculo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.update(req.body, {
            where: { id: req.params.id },
        });
        if (!vehiculo[0]) {
            return res.status(404).json({ error: 'Vehiculo not found' });
        }
        res.json({ message: 'Vehiculo updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteVehiculo = async (req, res) => {
    try {
        const result = await Vehiculo.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Vehiculo not found' });
        }
        res.json({ message: 'Vehiculo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};