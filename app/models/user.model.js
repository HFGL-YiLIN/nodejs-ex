const mongoose = require('mongoose');
 
const UserSchema = mongoose.Schema({
    firstname: String,
    lastname: String
});
 
module.exports = mongoose.model('User', UserSchema);