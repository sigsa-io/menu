const express = require('express');
const app = express();
const path = require('path');
const port = 3002;

app.use(express.static(path.resolve(__dirname, '..', 'client', 'dist')));

app.get('/', (req, res) => (
    res.send('server connected')
))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))