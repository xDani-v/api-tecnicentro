const Login = require('../models/Login');

exports.getLoginById = async (req, res) => {
    try {
        const login = await Login.findByPk(req.params.id);
        if (!login) {
            return res.status(404).json({ error: 'Login not found' });
        }
        res.json(login);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createLogin = async (req, res) => {
    try {
        const login = await Login.create(req.body);
        res.status(201).json(login);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateLogin = async (req, res) => {
    try {
        const login = await Login.update(req.body, {
            where: { id: req.params.id },
        });
        if (!login[0]) {
            return res.status(404).json({ error: 'Login not found' });
        }
        res.json({ message: 'Login updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteLogin = async (req, res) => {
    try {
        const result = await Login.destroy({
            where: { id: req.params.id },
        });
        if (!result) {
            return res.status(404).json({ error: 'Login not found' });
        }
        res.json({ message: 'Login deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};