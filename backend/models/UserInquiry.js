const mongoose = require('mongoose');

const userInquirySchema = new mongoose.Schema({
    dialCode: String,
    number: String,
    collectedAt: { type: Date, default: Date.now },
});

const UserInquiry = mongoose.model('UserInquiry', userInquirySchema);
export default UserInquiry;
