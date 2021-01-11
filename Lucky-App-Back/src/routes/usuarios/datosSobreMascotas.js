const express = require('express');

const DatosSobreMascotas = require('../../models/usuarios/DatosSobreMascotas');
const adopcionRouter = require('../mascotas/adopcion');

const datosSobreMascotasRouter = express.Router();

//AQUI DEFINIREMOS LAS PETICIONES CRUD

module.exports = datosSobreMascotasRouter;