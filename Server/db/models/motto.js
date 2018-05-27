const mongoose = require('mongoose');
const mottoSchema = require('../schemas/motto');

const Motto = mongoose.model('Motto', mottoSchema, 'Motto');

module.exports = Motto;