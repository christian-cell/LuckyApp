const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const familiaHogarSchema = new Schema (
//   {
//     vivesDeAlquiler : { type: Boolean ,required: true },
//     tuCaseroPermiteAnimales : { type: Boolean , required : true },
//     creesQuePodriasMudartePronto : { type: Boolean , required : true },
//     tienesJardin : { type : Boolean , required : true },
//     vivesConOtrasPersonas : { type : Boolean , required : true },
//     todosEstanDeAcuerdoConLaAdopcion : { type : Boolean , required: true },
//     estasDeAcuerdoConQueVisitemosTuCasa : { type : Boolean , required : true },
//   },
//   {
//       timestamps: true,
//   }
// );

// const datosSobreMascotasSchema = new Schema(
//   {
//     // idMascota: { type: Schema.Types.ObjectId, ref: "DatosMascotas" },
//     tienesMasAnimales: { type : Boolean , required: true },
//     cuales : { type : String , required: false},
//     seLlevanBien : { type: String ,required : false},
//     porQueQuieresAdoptar : { type : String , required : true },
//     conocesSusNecesidades : { type: String , required : true },
//     conocesSusGastos  : {  type: String , required : true },
//     conocesSuAlimentacion : { type: String , required : true },
//   },
//   {
//       timestamps: true
//   }
// );

const solicitudSchema = new Schema(
  {
      idUsuario : { type: Schema.Types.ObjectId, ref: "PerfilUsuario"},
      idMascota: { type: Schema.Types.ObjectId, ref: "DatosMascotas" },
      estadoAdopcion : {type : String, default: "en proceso"},
      datosMascotas : {
                tienesMasAnimales: { type : String , required: false },
                cuales : { type : String , required: false},
                seLlevanBien : { type: String ,required : false},
                porQueQuieresAdoptar : { type : String , required : false },
                conocesSusNecesidades : { type: String , required : false },
                conocesSusGastos  : {  type: String , required : false },
                conocesSuAlimentacion : { type: String , required : false },
      },
      datosHogar : {
                vivesDeAlquiler : { type: String ,required: false },
                tuCaseroPermiteAnimales : { type: String , required : false },
                creesQuePodriasMudartePronto : { type: String , required : false },
                tienesJardin : { type : String , required : false },
                vivesConOtrasPersonas : { type : String , required : false },
                todosEstanDeAcuerdoConLaAdopcion : { type : String , required: false },
                estasDeAcuerdoConQueVisitemosTuCasa : { type : String , required : false }
      },
  },
  {
    timestamps: true
  }

);

const SolicitudUsuario = mongoose.model('SolicitudUsuario', solicitudSchema);
module.exports = SolicitudUsuario;