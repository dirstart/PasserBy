const mongoose = require('mongoose');
const librarySchema = require('../schemas/library');

const Library = mongoose.model('Library', librarySchema, 'Library');

module.exports = Library;