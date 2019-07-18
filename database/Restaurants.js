const mongoose = require('mongoose');

const mongoUri = 'mongodb://database:27017/resdata';
mongoose.connect(mongoUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const menuSchema = new mongoose.Schema({
  restaurant_name: String,
  restaurant_id: String,
  menu_category: [{
    submenu_name: String,
    headers: [{
      header_name: String,
      entries: [{
        menu_name: String,
        menu_price: Number,
        menu_description: String,
      }],
    }],
  }],
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
