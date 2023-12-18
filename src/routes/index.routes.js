const express = require('express');
const empleadosRoutes = require('./empleados.routes');
const clientesRoutes = require('./cliente.routes');
const loginRoutes = require('./login.routes');
const mecanicoRoutes = require('./mecanico.routes');
const personalServiciosRoutes = require('./personal.routes');
const horariosRoutes = require('./horarios.routes');
const ps_sRoutes = require('./ps_s.routes');
const serviciosRoutes = require('./servicios.routes');
const repuestosRoutes = require('./repuestos.routes');
const repuestoFacturaRoutes = require('./repuesto_factura.routes');
const vehiculoRoutes = require('./vehiculo.routes');
const clienteVehiculoRoutes = require('./cliente_vehiculo.routes');
const administradoresRoutes = require('./administradores.routes');
const facturasRoutes = require('./facturas.routes');


const router = express.Router();

router.use('/empleados', empleadosRoutes);
router.use('/clientes', clientesRoutes);
router.use('/login', loginRoutes);
router.use('/mecanico', mecanicoRoutes);
router.use('/personal', personalServiciosRoutes);
router.use('/horarios', horariosRoutes);
router.use('/ps_s', ps_sRoutes);
router.use('/servicios', serviciosRoutes);
router.use('/repuestos', repuestosRoutes);
router.use('/repuestoFactura', repuestoFacturaRoutes);
router.use('/vehiculo', vehiculoRoutes);
router.use('/clienteVehiculo', clienteVehiculoRoutes);
router.use('/administradores', administradoresRoutes);
router.use('/facturas', facturasRoutes);
// Add more routes as needed

module.exports = router;