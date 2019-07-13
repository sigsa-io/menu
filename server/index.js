const express = require('express');
const path = require('path');
const Restaurants = require('../database/Restaurants.js');

const app = express();
const port = 3002;

app.use('/:restaurant_id/menus', express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/menuData/:restaurant_id', (req, res) => (
  Restaurants.find((err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.send(data);
  })
));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
