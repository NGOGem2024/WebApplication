// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
// require('dotenv').config();


// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { 
// })
// .then(() => console.log("MongoDB onnection successfully"))
// .catch(err => console.log("MongoDB connection error: ", err));


// // Routes
// const dataRouter = require('./routes/data');
// app.use('/api/data', dataRouter);

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });



const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  optionsSuccessStatus: 200
}));
app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log('Request body:', req.body);
  next();
});

// Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connection successful"))
.catch(err => console.error("MongoDB connection error: ", err));

// Routes
const dataRouter = require('./routes/data');
app.use('/api/data', dataRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});