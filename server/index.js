const express = require('express');
const Restaurants = require('../database/Restaurants.js');
const app = express();
const path = require('path');
const port = 3002;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/api/menuData', (req, res) => (
    Restaurants.find((err, data) => {
        if(err) {
          console.log(err);
        }
        res.send(data);
      })
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))