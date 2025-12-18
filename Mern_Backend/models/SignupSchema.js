const mdb = require('mongoose');

const signupSchema = new mdb.Schema({ 
    name: String,
    email: String,
    password: String
});
const signup_schema = mdb.model("Signup", signupSchema);

module.exports = mdb.model('Signup', signupSchema);