const Ps_s = require('../models/Ps_s');

exports.getAllPs_s = async (req, res) => {
    try {
        const ps_s = await Ps_s.findAll();
        res.json(ps_s);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getPs_sById = async (req, res) => {
    try {
        const ps_s = await Ps_s.findByPk(req.params.id);
        if (!ps_s) {
            return res.status(404).json({ error: 'Ps_s not found' });
        }
        res.json(ps_s);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPs_s = async (req, res) => {
    try {
        const ps_s = await Ps_s.create(req.body);
        res.status(201).json(ps_s);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePs_s = async (req, res) => {
    try {
        const ps_s = await Ps_s.update(req.body, {
            where: { id: req.params.id },
        });
        if (!ps_s[0]) {
            return res.status(404).json({ error: 'Ps_s not found' });
        }
        res.json({ message: 'Ps_s updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePs_s = async (req, res) => {
    try {
        const result = await Ps_s.destroy({
            where: {
                id_personal: req.params.id_personal,
                id_servicio: req.params.id_servicio
            },
        });
        if (!result) {
            return res.status(404).json({ error: 'Ps_s not found' });
        }
        res.json({ message: 'Ps_s deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};