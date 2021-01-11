const express = require('express');
const DatosUsuario = require('../../models/usuarios/Usuario');
const jwt = require('jsonwebtoken');
const authenticateJWT = require('../../middlewares/autentication');
const bcrypt = require('bcrypt');
const adopcionRouter = require('../mascotas/adopcion');

const datosUsuario = express.Router();



module.exports = datosUsuario; 