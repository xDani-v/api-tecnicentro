const Empleado = require('../models/Empleado');

exports.getAllEmpleados = async (req, res) => {
    try {
        const empleados = await Empleado.findAll();
        res.json(empleados);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getEmpleadoById = async (req, res) => {
    try {
        const empleado = await Empleado.findByPk(req.params.id);
        if (!empleado) {
            return res.status(404).json({ error: 'Empleado not found' });
        }
        res.json(empleado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.create(req.body);
        res.status(201).json(empleado);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateEmpleado = async (req, res) => {
    try {
        const empleado = await Empleado.update(req.body, {
            where: { id: req.params.id }
        });
        if (!empleado[0]) {
            return res.status(404).json({ error: 'Empleado not found' });
        }
        res.json({ message: 'Empleado updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteEmpleado = async (req, res) => {
    try {
        const result = await Empleado.destroy({
            where: { id: req.params.id }
        });
        if (!result) {
            return res.status(404).json({ error: 'Empleado not found' });
        }
        res.json({ message: 'Empleado deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};