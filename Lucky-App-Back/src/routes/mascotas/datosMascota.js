const express = require('express');
const DatosMascotas = require('../../models/mascotas/DatosMascotas');
const authenticateJWT = require('../../middlewares/autentication');
const datosMascotasRouter = express.Router();
let multer  = require('multer');
const cloudinary = require('cloudinary'). v2;
const fs = require ('fs-extra');

const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
const IMAGES_URL_BASE = "/ProfileImages"
cloudinary.config({
    cloud_name: 'dro8tyauo',
    api_key:'446463658639534',
    api_secret:'yrMSfLw4HLjXx73WoNFdgaawlRA'

});
const fileFilter = (req, file, cb) => {
    console.log(file);
  if (!VALID_FILE_TYPES.includes(file.mimetype)) {
    cb(new Error('Invalid file type'));
  } else {
    cb(null, true);
  }
}

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'src/assets/public' + IMAGES_URL_BASE)
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    },
    
})
   
let upload = multer({ storage: storage, fileFilter: fileFilter })

datosMascotasRouter.post('/', upload.single('img'), (req, res) => {
    const result1 =  cloudinary.uploader.upload(req.file.path,(error,result)=>{console.log(error,result)
        
   
    const nombre = req.body.nombre;
    const sexo = req.body.sexo;
    const ciudad = req.body.ciudad;
    const especie = req.body.especie;
    // Añado tipo
    const tipo = req.body.tipo;
    const historia = req.body.historia;
    const fechaDeNacimiento = req.body.fechaDeNacimiento;
    const tamaño = req.body.tamaño;
    const peso = req.body.peso;
    const direccion = req.body.direccion;
    const lat = req.body.lat;
    const long = req.body.long;
    const personalidad = req.body.personalidad;
    const img = req.body.img;
    const esterilizado=req.body.esterilizado;
    const vacunado=req.body.vacunado;
    const desparasitado=req.body.desparasitado;
    const identificado=req.body.identificado;
    const microchip=req.body.microchip;
    const sano=req.body.sano;
    const tasas=req.body.tasas;
    const queCiudad=req.body.queCiudad;
    const requisitos=req.body.requisitos;
    
    // const salud = req.body.salud;
    // const adopcion = req.body.adopcion;

    const datosMascotas = new DatosMascotas()
    datosMascotas.img =img;
    datosMascotas.nombre = nombre;
    datosMascotas.sexo = sexo;
    datosMascotas.ciudad = ciudad;
    datosMascotas.especie = especie;
    // Añado tipo
    datosMascotas.tipo = tipo;
    datosMascotas.historia = historia;
    datosMascotas.fechaDeNacimiento = fechaDeNacimiento;
    datosMascotas.tamaño = tamaño;
    datosMascotas.peso = peso;
    datosMascotas.direccion= direccion;
    datosMascotas.lat = lat;
    datosMascotas.long = long;
    datosMascotas.personalidad = personalidad;
    datosMascotas.esterilizado = esterilizado;
    datosMascotas.vacunado = vacunado;
    datosMascotas.desparasitado = desparasitado;
    datosMascotas.identificado = identificado;
    datosMascotas.microchip = microchip;
    datosMascotas.sano = sano;
    datosMascotas.tasas = tasas;
    datosMascotas.queCiudad = queCiudad;
    datosMascotas.requisitos = requisitos;
    // datosMascotas.salud = salud;
    // datosMascotas.adopcion = adopcion;
    datosMascotas.img= result.url
    datosMascotas.save()
        .then((newDatoMascotas) => {
            res.json(newDatoMascotas);
        })
        .catch((error) => {
            res.status(500).send(error);
        })
    //////
    fs.unlink(req.file.path);
    })

    //////
});




datosMascotasRouter.get('/', (req, res) => {
    DatosMascotas.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datosMascotas) => {
            res.send(datosMascotas)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
});


// Nuevo -----------------------------------------------> David
// Añadiendo ruta para buscar por especie
// datosMascotasRouter.get('/:ciudad', (req, res) => {
//     const ciudad = req.params.ciudad;
//     DatosMascotas.find({ciudad: ciudad}, { __v: 0, createdAt: 0, updatedAt: 0 })
//         .then((datosMascota) => {
//             res.send(datosMascota)
//         })
//         .catch((error) => {
//             res.status(500).send(error)
//         })
// });

datosMascotasRouter.get('/filtro', (req, res) => {
    
    let filtros = {...req.query}

    console.log(filtros)

    const queryFiltros = Object.keys(filtros).map((key, i) => {
        return { [key] : filtros[key] }
    });

    let queryFinal = {};

    if (queryFiltros.length > 0){
        queryFinal = {
            $and : queryFiltros
        }
    }

    console.log(queryFiltros);

    DatosMascotas.find(
        queryFinal,
        {
            __v: 0, createdAt: 0, updatedAt: 0 
        })
        .then((datosMascota) => {
            res.status(200).send(datosMascota)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
});

datosMascotasRouter.get('/:nombre', (req, res) => {
    const nombre = req.params.nombre;
    DatosMascotas.find({nombre: nombre}, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datosMascotas) => {
            res.send(datosMascotas)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
});

/* datosMascotasRouter.get('/salud', (req, res) => {
    const salud = req.params.salud;
    DatosMascotas.find({salud: salud}, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datosMascotas) => {
            res.send(datosMascotas)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
});  */


// datosMascotasRouter.get('/:ciudad/:especie/', (req, res) => {
//     const especie = req.params.especie;
//     const ciudad = req.params.ciudad;
//     DatosMascotas.find({especie: especie, tipo: tipo, peso: peso}, { __v: 0, createdAt: 0, updatedAt: 0 })
//         .then((datosMascota) => {
//             res.send(datosMascota)
//         })
//         .catch((error) => {
//             res.status(500).send(error)
//         })
// });
// // -----------------------------------------------------

module.exports = datosMascotasRouter;
