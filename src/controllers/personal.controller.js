const PersonalServicios = require('../models/Personal');

exports.getPersonalServiciosById = async (req, res) => {
    try {
        const personalServicios = await PersonalServicios.findByPk(req.params.id);
        if (!personalServicios) {
            return res.status(404).json({ error: 'PersonalServicios not found' });
        }
        res.json(personalServicios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createPersonalServicios = async (req, res) => {
    try {
        const personalServicios = await PersonalServicios.create(req.body);
        res.status(201).json(personalServicios);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updatePersonalServicios = async (req, res) => {
    try {
        const personalServicios = await PersonalServicios.update(req.body, {
            where: { id: req.params.id },
        });
        if (!personalServicios[0]) {
            return res.status(404).json({ error: 'PersonalServicios not found' });
        }
        res.json({ message: 'PersonalServicios updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deletePersonalServicios = async (req, res) => {
    try {
        const result = await PersonalServicios.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'PersonalServicios not found' });
        }
        res.json({ message: 'PersonalServicios deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};