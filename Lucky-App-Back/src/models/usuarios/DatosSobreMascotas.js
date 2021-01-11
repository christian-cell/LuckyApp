const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const datosSobreMascotasSchema = new Schema(
    {
      tienesMasAnimales: { type : Boolean , required:true },
      cuales : { type : String , required: true },
      seLlevanBien : { type: String ,required : true},
      porQueQuieresAdoptar : { type : String , required : true },
      conocesSusNecesidades : { type: String , required : true },
      conocesSusGastos  : {  type: String , required : true },
      conocesSuAlimentacion : { type: String , required : true },
    },
    {
        timestamps: true
    }
);

const DatosMascotas = mongoose.model('DatosSobreMascotas' , datosSobreMascotasSchema ) ;
module.exports = DatosMascotas;


