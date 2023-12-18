const ClienteVehiculo = require('../models/cliente_vehiculo');

exports.getClienteVehiculoById = async (req, res) => {
    try {
        const clienteVehiculo = await ClienteVehiculo.findByPk(req.params.id);
        if (!clienteVehiculo) {
            return res.status(404).json({ error: 'ClienteVehiculo not found' });
        }
        res.json(clienteVehiculo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createClienteVehiculo = async (req, res) => {
    try {
        const clienteVehiculo = await ClienteVehiculo.create(req.body);
        res.status(201).json(clienteVehiculo);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateClienteVehiculo = async (req, res) => {
    try {
        const clienteVehiculo = await ClienteVehiculo.update(req.body, {
            where: { id: req.params.id },
        });
        if (!clienteVehiculo[0]) {
            return res.status(404).json({ error: 'ClienteVehiculo not found' });
        }
        res.json({ message: 'ClienteVehiculo updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteClienteVehiculo = async (req, res) => {
    try {
        const result = await ClienteVehiculo.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'ClienteVehiculo not found' });
        }
        res.json({ message: 'ClienteVehiculo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};