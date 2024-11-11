const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Capsule = require('../models/Capsule');

// Create a new capsule
router.post('/', async (req, res) => {
    const { creator, message, unlockDate, files } = req.body;

    // Validate creator ID as ObjectId
    if (!mongoose.Types.ObjectId.isValid(creator)) {
        return res.status(400).json({ error: 'Invalid creator ID format' });
    }

    try {
        const newCapsule = new Capsule({ 
            creator,
            message,
            unlockDate: new Date(unlockDate),  // Ensure unlockDate is in Date format
            files: files || []
        });
        await newCapsule.save();
        
        // Send the created capsule ID in JSON format
        res.status(201).json({ message: 'Capsule created successfully', capsuleId: newCapsule._id });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
