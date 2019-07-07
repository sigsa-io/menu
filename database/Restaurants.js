const mongoose = require('mongoose');
// const db = require('./index.js');
const mongoUri = 'mongodb://localhost/resdata';
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
const menuSchema = new mongoose.Schema({
  restaurant_name: String,
  restaurant_id: String,
  menu: [{
    menu_id: Number,
    menu_header: String,
    menu_name: String,
    menu_price: Number,
    menu_description: String,
    menu_category: String,
  }],
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
