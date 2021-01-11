const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const familiaHogarSchema = new Schema ( 
    {
      vivesDeAlquiler : { type: Boolean ,required: true },
      tuCaseroPermiteAnimales : { type: Boolean , required : true },
      creesQuePodriasMudartePronto : { type: Boolean , required : true },
      tienesJardin : { type : Boolean , required : true },
      vivesConOtrasPersonas : { type : Boolean , required : true },
      todosEstanDeAcuerdoConLaAdopcion : { type : Boolean , required: true },
      estasDeAcuerdoConQueVisitemosTuCasa : { type : Boolean , required : true },
    },
    {
        timestamps: true,
    }
);

const FamiliaHogar = mongoose.model('FamiliaHogar', familiaHogarSchema );
module.exports = FamiliaHogar;

