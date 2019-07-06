const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/resdata';

let db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
