const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(express.static('resources'));
 
global.__basedir = __dirname;
 
// configure the database
const dbConfig = require(`${__basedir}/app/config/mongodb.config.js`);
const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;
 
// connect to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to mongodb.");    
}).catch(err => {
    console.log('Could not connect to mongodb.');
    process.exit();
});
 
require('./app/routes/user.route.js')(app);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is up and running on port numner ${port}`);
});