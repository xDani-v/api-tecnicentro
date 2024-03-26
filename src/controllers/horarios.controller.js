const Horarios = require('../models/Horarios');

exports.getAllHorarios = async (req, res) => {
    try {
        const horarios = await Horarios.findAll();
        res.json(horarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getHorariosById = async (req, res) => {
    try {
        const horarios = await Horarios.findByPk(req.params.id);
        if (!horarios) {
            return res.status(404).json({ error: 'Horarios not found' });
        }
        res.json(horarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createHorarios = async (req, res) => {
    try {
        const horarios = await Horarios.create(req.body);
        res.status(201).json(horarios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateHorarios = async (req, res) => {
    try {
        const horarios = await Horarios.update(req.body, {
            where: { id: req.params.id },
        });
        if (!horarios[0]) {
            return res.status(404).json({ error: 'Horarios not found' });
        }
        res.json({ message: 'Horarios updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteHorarios = async (req, res) => {
    try {
        const result = await Horarios.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Horarios not found' });
        }
        res.json({ message: 'Horarios deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};