const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema(
    {
        user: { type:Stringj, required:true },
        password: { type:String , required: true }
    },
    {
        timestamps:true,
    }
)

const Usuario = mongoose.model('Usuario', usuarioSchema);
module.exports = Usuario