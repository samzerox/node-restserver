//==================
// Puerto
//==================

process.env.PORT = process.env.PORT || 3000;

//==================
// Entorno
//==================

//esto dice si estoy en produccion o en desarrollo
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//==================
// Vencimiento del token
//==================
//
// process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;
process.env.CADUCIDAD_TOKEN = '48h';

//==================
// SEED
//==================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';
//==================
// Base de datos
//==================

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//==================
// Google Client ID
//==================
process.env.CLIENT_ID = process.env.CLIENT_ID || '60502862248-o7eti9b2kflfpfito92nag1s5afaj7hv.apps.googleusercontent.com';