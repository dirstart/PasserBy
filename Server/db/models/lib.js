const mongoose = require('mongoose');
const libSchema = require('../schemas/lib');

const Lib = mongoose.model('Lib', libSchema, 'Lib');

module.exports = Lib;