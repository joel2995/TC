const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const capsuleRoutes = require('./routes/capsuleRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();

app.use(cors({ origin: 'http://localhost:3000' })); // Enable CORS for frontend
app.use(express.json());

app.use('/api/capsules', capsuleRoutes);
app.use('/api/users', userRoutes);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
