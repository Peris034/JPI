const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    issuedDate: Date,
});

module.exports = mongoose.model('Certificate', certificateSchema);
