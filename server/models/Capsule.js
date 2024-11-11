const mongoose = require('mongoose');

const capsuleSchema = new mongoose.Schema({
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Ensure creator is an ObjectId
    message: { type: String, required: true },
    unlockDate: { type: Date, required: true }, // Unlock date as a date field
    isUnlocked: { type: Boolean, default: false },
    files: [{ type: String }]
});

module.exports = mongoose.model('Capsule', capsuleSchema);
