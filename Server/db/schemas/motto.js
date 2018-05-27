const mongoose = require('mongoose');

const mottoSchema = new mongoose.Schema({
    content: {
        unique: true,
        type: String
    }
});


module.exports = mottoSchema;
