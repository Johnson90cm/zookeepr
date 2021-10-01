const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes')
const fs = require('fs');
const path = require('path');
const express = require('express')
const QueryString = require('qs');
const { animals } = require('./data/animals.json')

const PORT = process.env.PORT || 3001;
const app = express();

// setup server to open routes to css and js files
app.use(express.static('public'));
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incomingJSON data
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});