const mongoose = require ('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;


const perfilUsuarioSchema = new Schema(
  {
    nombreApellidos : { type:String , required: true },
    email : {type:String , required: true},
    contraseña:{type:String , require: true},
    telefono : { type : String ,required : true },
    dni : { type: String , required: true },
    direccion : { type: String , required : true },
    codigoPostal : { type: String , required: true },
    ciudad : { type : String , required: true },
    imagen : { type : String,default:"https://www.vexels.com/media/users//3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg"}
  },
  {
    timestamps : true,
  }
);




const PerfilUsuario = mongoose.model('PerfilUsuario' , perfilUsuarioSchema );
module.exports = PerfilUsuario;