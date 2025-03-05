const mongoose = require('mongoose');

const userInquirySchema = new mongoose.Schema({
    dialCode: String,
    number: String,
    collectedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('UserInquiry', userInquirySchema);
