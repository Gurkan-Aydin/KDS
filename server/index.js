const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var db = require('./database');

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());



app.use('/api/admin', require('./api/admin'))
app.use('/api/employee', require('./api/employee'))
app.use('/api/statu', require('./api/statu'))
app.use('/api/criterion', require('./api/criterion'))



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

db.query('SELECT NOW()', (err, res) => {
    console.log("asdaaaaaaaaaaaaaaaaaaaaa")
    if (err.error) 
        return console.log(err.error);
    console.log(`PostgreSQL connected: ${res[0].now}`);

});

module.exports =app;