const Repuestos = require('../models/Repuestos');

exports.getRepuestosById = async (req, res) => {
    try {
        const repuestos = await Repuestos.findByPk(req.params.id);
        if (!repuestos) {
            return res.status(404).json({ error: 'Repuestos not found' });
        }
        res.json(repuestos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createRepuestos = async (req, res) => {
    try {
        const repuestos = await Repuestos.create(req.body);
        res.status(201).json(repuestos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateRepuestos = async (req, res) => {
    try {
        const repuestos = await Repuestos.update(req.body, {
            where: { id: req.params.id },
        });
        if (!repuestos[0]) {
            return res.status(404).json({ error: 'Repuestos not found' });
        }
        res.json({ message: 'Repuestos updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteRepuestos = async (req, res) => {
    try {
        const result = await Repuestos.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Repuestos not found' });
        }
        res.json({ message: 'Repuestos deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};