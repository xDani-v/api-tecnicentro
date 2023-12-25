const Mecanico = require('../models/Mecanico');

exports.getAllMecanicos = async (req, res) => {
    try {
        const mecanicos = await Mecanico.findAll();
        res.json(mecanicos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMecanicoById = async (req, res) => {
    try {
        const mecanico = await Mecanico.findByPk(req.params.id);
        if (!mecanico) {
            return res.status(404).json({ error: 'Mecanico not found' });
        }
        res.json(mecanico);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createMecanico = async (req, res) => {
    try {
        const mecanico = await Mecanico.create(req.body);
        res.status(201).json(mecanico);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateMecanico = async (req, res) => {
    try {
        const mecanico = await Mecanico.update(req.body, {
            where: { id: req.params.id },
        });
        if (!mecanico[0]) {
            return res.status(404).json({ error: 'Mecanico not found' });
        }
        res.json({ message: 'Mecanico updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteMecanico = async (req, res) => {
    try {
        const result = await Mecanico.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Mecanico not found' });
        }
        res.json({ message: 'Mecanico deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};