const RepuestoFactura = require('../models/RepuestoFactura');

exports.getRepuestoFacturaById = async (req, res) => {
    try {
        const repuestoFactura = await RepuestoFactura.findByPk(req.params.id);
        if (!repuestoFactura) {
            return res.status(404).json({ error: 'RepuestoFactura not found' });
        }
        res.json(repuestoFactura);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createRepuestoFactura = async (req, res) => {
    try {
        const repuestoFactura = await RepuestoFactura.create(req.body);
        res.status(201).json(repuestoFactura);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateRepuestoFactura = async (req, res) => {
    try {
        const repuestoFactura = await RepuestoFactura.update(req.body, {
            where: { id: req.params.id },
        });
        if (!repuestoFactura[0]) {
            return res.status(404).json({ error: 'RepuestoFactura not found' });
        }
        res.json({ message: 'RepuestoFactura updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteRepuestoFactura = async (req, res) => {
    try {
        const result = await RepuestoFactura.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'RepuestoFactura not found' });
        }
        res.json({ message: 'RepuestoFactura deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};