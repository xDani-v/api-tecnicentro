const Facturas = require('../models/Factura');

exports.getFacturaById = async (req, res) => {
    try {
        const factura = await Facturas.findByPk(req.params.id);
        if (!factura) {
            return res.status(404).json({ error: 'Factura not found' });
        }
        res.json(factura);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createFactura = async (req, res) => {
    try {
        const factura = await Facturas.create(req.body);
        res.status(201).json(factura);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateFactura = async (req, res) => {
    try {
        const factura = await Facturas.update(req.body, {
            where: { id: req.params.id },
        });
        if (!factura[0]) {
            return res.status(404).json({ error: 'Factura not found' });
        }
        res.json({ message: 'Factura updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteFactura = async (req, res) => {
    try {
        const result = await Facturas.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Factura not found' });
        }
        res.json({ message: 'Factura deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};