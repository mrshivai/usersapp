const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jaydeep:cf7oXlVlFhxQmb9@cluster0.0z436rp.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4,
});

module.exports = mongoose.connection;

// "mongodb+srv://jaydeep:cf7oXlVlFhxQmb9@cluster0.0z436rp.mongodb.net/?retryWrites=true&w=majority"