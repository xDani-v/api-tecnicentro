const Administradores = require('../models/Administradores');

exports.getAdministradorById = async (req, res) => {
    try {
        const administrador = await Administradores.findByPk(req.params.id);
        if (!administrador) {
            return res.status(404).json({ error: 'Administrador not found' });
        }
        res.json(administrador);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createAdministrador = async (req, res) => {
    try {
        const administrador = await Administradores.create(req.body);
        res.status(201).json(administrador);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAdministrador = async (req, res) => {
    try {
        const administrador = await Administradores.update(req.body, {
            where: { id: req.params.id },
        });
        if (!administrador[0]) {
            return res.status(404).json({ error: 'Administrador not found' });
        }
        res.json({ message: 'Administrador updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteAdministrador = async (req, res) => {
    try {
        const result = await Administradores.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Administrador not found' });
        }
        res.json({ message: 'Administrador deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};