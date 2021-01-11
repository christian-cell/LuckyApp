const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Esquema principal
const datosMascotaSchema = new Schema(
  {
    nombre: { type: String, required: true },
    sexo: { type: String, required: true },
    ciudad: { type: String, required: true },
    especie: { type: String, required: true },
    tipo: { type: String, required: true },
    historia: { type: String, required: true },
    fechaDeNacimiento: { type: Date, default: Date.now() },
    tamaño: { type: String, required: true },
    personalidad: { type: String, required: true },
    peso: { type: Number, required: true },
    direccion: { type: String, required: true },
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
    img: { type: String, required: false },
    esterilizado: { type: String, required: true },
    vacunado: { type: String, required: true },
    desparasitado: { type: String, required: true },
    identificado: { type: String, required: true },
    microchip: { type: String, required: true },
    sano: { type: String, required: true },
    tasas: { type: Number, required: true },
    queCiudad: { type: String, required: true },
    requisitos: { type: String, required: true }
  }
);

const DatosMascota = mongoose.model('DatosMascotas', datosMascotaSchema);
module.exports = DatosMascota;

/* 
"sexo":"hembra",
"especie":"periquito", 
"historia":"fue recogido en la calle",
"fecheDeNacimiento": 2020-09-17,
"tamaño":"quince por veinte cm",
"peso":230
*/



/*{
  "nombre":"Elias",
  "sexo":"macho",
  "ciudad":"madrid",
  "especie":"conejo",
  "tipo":"roedor",
  "historia":"fué abandonado por su madre al nacer",
  "tamaño":"pequeño",
  "personalidad":"es travieso",
  "peso":2,
  "direccion":"calle val paraiso",
  "lat": 37.9870400,
  "long":-1.1300400,
  "img":"https://cf.ltkcdn.net/mascotas/images/std/255323-699x450-diferentes-razas-conejillos-indias.jpg",
  "esterilizado":true,
  "vacunado":false,
  "sano":false,
  "identificado":true,
  "desparasitado":true,
  "microchip":false,
  "tasas":45,
  "queCiudad":"murcia",
  "requisitos":"Un ambiente adradable para que se pueda desarrollarss"
}*/