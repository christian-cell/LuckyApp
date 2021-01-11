const express = require('express');
const SolicitudUsuario = require('../../models/usuarios/SolicitudAdopcion');

const SolicitudAdopcion = require('../../models/usuarios/SolicitudAdopcion');


const solicitudRoute = express.Router();


// Post Solicitud
solicitudRoute.post('/', (req, res) => {

  const {
    idUsuario,
    idMascota,
    estadoAdopcion,

    tienesMasAnimales,
    cuales,
    seLlevanBien,
    porQueQuieresAdoptar,
    conocesSusNecesidades,
    conocesSusGastos,
    conocesSuAlimentacion,

    vivesDeAlquiler,
    tuCaseroPermiteAnimales,
    creesQuePodriasMudartePronto,
    tienesJardin,
    vivesConOtrasPersonas,
    todosEstanDeAcuerdoConLaAdopcion,
    estasDeAcuerdoConQueVisitemosTuCasa

  } = req.body;


  const solicitud = new SolicitudAdopcion();

  solicitud.idUsuario = idUsuario;
  solicitud.idMascota = idMascota;
  solicitud.estadoAdopcion = estadoAdopcion;

  solicitud.datosMascotas = {
    tienesMasAnimales,
    cuales,
    seLlevanBien,
    porQueQuieresAdoptar,
    conocesSusNecesidades,
    conocesSusGastos,
    conocesSuAlimentacion
  };
  solicitud.datosHogar = {
    vivesDeAlquiler,
    tuCaseroPermiteAnimales,
    creesQuePodriasMudartePronto,
    tienesJardin,
    vivesConOtrasPersonas,
    todosEstanDeAcuerdoConLaAdopcion,
    estasDeAcuerdoConQueVisitemosTuCasa
  };

  solicitud.save()
    .then((newSolicitud) => {
      res.json(newSolicitud);
    })
    .catch((error) => {
      res.status(500).send(error);
    })
});

solicitudRoute.get('/', (req, res) => {

  SolicitudAdopcion.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
    .populate('idUsuario')
    .populate('idMascota')
    .exec((err, solicitud) => {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(solicitud)
      }
    })
});

solicitudRoute.post('/cambiarEstado/:id', (req, res) => {

  const id = req.params.id;
  const estadoAdopcion = req.body.estado;
  console.log(req.body)

  SolicitudAdopcion.findByIdAndUpdate(id, { estadoAdopcion: estadoAdopcion }, { __v: 0, createdAt: 0, updatedAt: 0 })
    .then((solicitud) => {
      res.status(200).send({ msg: "Solicitud " + estadoAdopcion });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});


module.exports = solicitudRoute;