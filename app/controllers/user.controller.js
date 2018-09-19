const userData = require('../models/user.model.js');
 
// save formdata to mongodb
exports.save = (req, res) => {
	console.log(`Post a user: ${JSON.stringify(req.body)}`);
	
    // create a customer
    const user = new userData({
        firstname: req.body.firstname,
		lastname: req.body.lastname
    });
 
    // save a customer in the mongodb
    user.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
// fetch all users
exports.findAll = (req, res) =>  {
	console.log(`Fetch all users`);
	
    userData.find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};