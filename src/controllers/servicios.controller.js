const Servicios = require('../models/Servicios');

exports.getServiciosById = async (req, res) => {
    try {
        const servicios = await Servicios.findByPk(req.params.id);
        if (!servicios) {
            return res.status(404).json({ error: 'Servicios not found' });
        }
        res.json(servicios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createServicios = async (req, res) => {
    try {
        const servicios = await Servicios.create(req.body);
        res.status(201).json(servicios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateServicios = async (req, res) => {
    try {
        const servicios = await Servicios.update(req.body, {
            where: { id: req.params.id },
        });
        if (!servicios[0]) {
            return res.status(404).json({ error: 'Servicios not found' });
        }
        res.json({ message: 'Servicios updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteServicios = async (req, res) => {
    try {
        const result = await Servicios.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Servicios not found' });
        }
        res.json({ message: 'Servicios deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};