const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { 
})
.then(() => console.log("MongoDB onnection successfully"))
.catch(err => console.log("MongoDB connection error: ", err));


// Routes
const dataRouter = require('./routes/data');
app.use('/api/data', dataRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
