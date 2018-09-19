const route = app => {
 
	const express = require("express");
	const router = express.Router();
	const path = __basedir;

    const usersController = require(`${path}/app/controllers/user.controller.js`);
	
	
	
	router.use((req, res, next) => {
		console.log(`/${req.method}`);
		next();
	});
	
	app.get('/', (req, res) => {
		res.sendFile(`${path}/views/index.html`);
	});
 
    // save a user to mongodb
    app.post('/api/users/save', usersController.save);
 
    // retrieve all users
    app.get('/api/users/all', usersController.findAll);
	
	app.use("/", router);
 
	app.use("*", (req, res) => {
		res.sendFile(`${path}/views/404.html`);
	});
}; 

module.exports = route; 