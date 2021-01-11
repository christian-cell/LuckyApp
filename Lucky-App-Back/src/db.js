const mongoose = require('mongoose');

// aqui esta la URL de nuestra base de datos , mismo nombre para todos
const DB_URL =  process.env.DB_URL || 'mongodb://localhost:27017/appLucky';
// const DB_URL = 'mongodb://localhost:27017/appLucky';
// process.env.DB_URL ||
// Función que conecta nuestro servidor a la base de datos de MongoDB mediante mongoose
mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});