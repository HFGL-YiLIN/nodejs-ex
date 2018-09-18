const express = require('express');
const app = express();

// OpenShift port config
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

const bodyParser = require('body-parser');
app.use(bodyParser.json());
 
app.use(express.static('resources'));
 
global.__basedir = __dirname;
 
// Configuring the database
const dbConfig = require('./app/config/mongodb.config.js');
const mongoose = require('mongoose');
 
mongoose.Promise = global.Promise;
 
// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
 
require('./app/routes/user.route.js')(app);

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);