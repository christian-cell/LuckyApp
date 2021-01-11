const cors= require ('cors');
require('dotenv').config();
const express = require('express');


//me traigo la config de las variables de entorno

//llamamos a las routes de usuarios y las guardamos en constantes
const perfilUsuarioRoutes = require('./routes/usuarios/perfilUsuario');
//const datosSobreMascotaRoutes = require('./routes/usuarios/datosSobreMascotas');
//const familiaHogarRoutes = require('./routes/usuarios/familiaHogar');
const solicitudAdopcion = require('./routes/usuarios/solicitudAdopcion');

//llamamos a las routes de mascotas
//const adopcionRoutes = require('./routes/mascotas/adopcion');
const datosMascotaRoutes = require('./routes/mascotas/datosMascota');
//const saludRoutes = require('./routes/mascotas/salud');

// Requerimos el archivo de configuración de nuestra DB
require('./db.js');

//pilla 4000 que esta en .env si no el 3001
const PORT = process.env.PORT || 3001   // el 3000 lo ocupa React
const server = express();
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.use(express.static('public'));
server.use(cors());


server.use(express.json());
server.use(express.urlencoded({extended: false}));


//definimos los paths finales de usuarios y mascotas
server.use('/perfilUsuario', perfilUsuarioRoutes );
server.use('/solicitudAdopcion', solicitudAdopcion);
//server.use('/api/adopcion' , adopcionRoutes );
//server.use('/api/datosSobreMascotas', datosSobreMascotaRoutes );
//server.use('/api/familiaHogar' , familiaHogarRoutes ); 
//server.use('/api/salud' , saludRoutes ); 
server.use('/api/datosMascota', datosMascotaRoutes );

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});

