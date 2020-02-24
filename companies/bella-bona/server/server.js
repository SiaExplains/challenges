const express = require('express');
const orderRoutes = require('./orders.js');
const _ = require('lodash');
const bodyParser = require('body-parser');
const cors = require('cors');
let app = express();
let API_PORT = 3006;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/orders', orderRoutes);

app.listen(API_PORT, () => {
    console.log(`Back-End API is rurring on port [${API_PORT}]...!`);
});
