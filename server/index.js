const express = require('express');
const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const Restaurants = require('../database/Restaurants.js');

const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));
app.use(expressStaticGzip(path.resolve(__dirname, '..', 'client', 'dist'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  },
}));

// app.use('/:restaurant_id', express.static(path.resolve(__dirname, '..', 'client', 'dist')));
app.use('/:restaurant_id', expressStaticGzip(path.resolve(__dirname, '..', 'client', 'dist'), {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
     res.setHeader("Cache-Control", "public, max-age=31536000");
  },
}));

app.get('/menuData/:restaurant_id', (req, res) => (
  Restaurants.findOne({ restaurant_id: req.params.restaurant_id }, (err, data) => {
    if (err) {
      return console.log(err);
    }
    return res.send(data);
  })
));

app.listen(port, () => console.log(`App listening on port ${port}!`));
