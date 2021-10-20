const mongoose = require('mongoose');

//Cadena MongoDB Local
//const URI='mongodb://localhost/mern-tasks';

//cadena MongoDB Atlas
const URI='mongodb+srv://<user>:<password>@cluster0.cafgg.mongodb.net/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;