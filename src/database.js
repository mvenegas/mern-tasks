const mongoose = require('mongoose');

//const URI='mongodb://localhost/mern-tasks';
const URI='mongodb+srv://mvenegas:lapdmvs1@cluster0.cafgg.mongodb.net/mern-tasks';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;