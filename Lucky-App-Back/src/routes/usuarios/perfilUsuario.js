const express = require('express');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary'). v2;
const authenticateJWT = require('../../middlewares/autentication');
const PerfilUsuario = require('../../models/usuarios/PerfilUsuario');
const perfilUsuarioRouter = express.Router();
const fs = require ('fs-extra');

/////////////////////////////////////////////////////////////////////////////////////////////////////

let multer  = require('multer')
const VALID_FILE_TYPES = ['image/png', 'image/jpg', 'image/jpeg'];
const IMAGES_URL_BASE = "/ProfileImages"
 cloudinary.config({
    cloud_name:'dro8tyauo',
    api_key:'446463658639534',
    api_secret:'yrMSfLw4HLjXx73WoNFdgaawlRA'

 });
// process.env.CLOUDINARY_GENERAL;
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
    // path: function (req, file, cb) {
    //     cb(null, 'C:/Users/robin/Desktop/lucky/luky-front2/lucky-front/front/src/Images')
    //   }
})
   
let upload = multer({ storage: storage, fileFilter: fileFilter })


//////////////////////////////////////////////////////////////////////////////////////////////////////

perfilUsuarioRouter.post('/login', (req, res) => {

    const email = req.body.email;
    const contraseña = req.body.contraseña;


    PerfilUsuario.findOne({ email: email })

        .then((usuario) => {
            // console.log(usuario)

            if (usuario) {
                bcrypt.compare(contraseña, usuario.contraseña, function (err, result) {
                    if (result) {
                        console.log(result)

                        const accessToken = jwt.sign(
                            { usuarioId: usuario._id, usuarioNombreApellidos: usuario.nombreApellidos },
                            process.env.JWT_SECRET);
                        return res.json({ logged: true, token: accessToken, usuario: usuario, });
                    }
                    else {
                        console.log(err)

                        return res.status(404).json({ logged: false })
                    }
                });
            }
            else {
                console.log('no match')
                return res.status(404).json({ logged: false, mensaje: "tercero return" })
            }
        })
        .catch((err) => {
            console.log('no encontrado')
            return res.status(404).json({ logged: false, mensaje: "cuarto return" })
        })
});

perfilUsuarioRouter.post('/', (req, res) => {


    const nombreApellidos = req.body.nombreApellidos;
    const email = req.body.email;
    const contraseña = req.body.contraseña;
    const telefono = req.body.telefono;
    const dni = req.body.dni;
    const direccion = req.body.direccion;
    const codigoPostal = req.body.codigoPostal;
    const ciudad = req.body.ciudad;
    const imagen = req.body.imagen;

    bcrypt.hash(contraseña, saltRounds, function (err, hash) {
        const perfilUsuario = new PerfilUsuario()

        perfilUsuario.contraseña = hash;
        perfilUsuario.nombreApellidos = nombreApellidos;
        perfilUsuario.email = email;
        perfilUsuario.telefono = telefono;
        perfilUsuario.dni = dni;
        perfilUsuario.direccion = direccion;
        perfilUsuario.codigoPostal = codigoPostal;
        perfilUsuario.ciudad = ciudad;
        perfilUsuario.imagen = imagen;

        perfilUsuario.save()
            .then((newDatoUsuario) => {
                res.json(newDatoUsuario);
            })
            .catch((error) => {
                res.status(500).send(error);
            })

    });

});
//-------------------------------------------------------------------------------




perfilUsuarioRouter.get('/', (req, res) => {
    PerfilUsuario.find({}, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datosUsuario) => {
            res.send(datosUsuario)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
});

perfilUsuarioRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    PerfilUsuario.find({ _id: id }, { __v: 0, createdAt: 0, updatedAt: 0 })
        .then((datosUsuario) => {
            res.send(datosUsuario)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
});



/////////////////////////////////////////////////////////////////////////////////////////

perfilUsuarioRouter.post('/profileImage/:id', upload.single('avatar'),  (req, res)=> {
        const id=req.params.id
        const result1 =  cloudinary.uploader.upload  (req.file.path,(error,result)=>{console.log(error,result)
        
     
 console.log("este es el mensaje",result.url)
 

    PerfilUsuario.findByIdAndUpdate({_id : id}, {
        // imagen :  req.file.originalname
        imagen:result.url
    })
    .then((updatedUser, err) => {
        if(err)
        {
            res.status(500).send(err)
        }
        else{
            res.send("Imagen actualizada")
            
        }
    })
     fs.unlink(req.file.path);
 })
});

module.exports = perfilUsuarioRouter;
