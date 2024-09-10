// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// require('dotenv').config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect(process.env.ATLAS_URI, {
// }).then(() => console.log("MongoDB connected successfully"))
//   .catch(err => console.log("MongoDB connection error: ", err));

// // Define routes
// const dataRouter = require('./routes/data');
// app.use('/api/data', dataRouter);

// // Catch-all handler for any request that doesn't match the ones above
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'webfrontend', 'build')));

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("MongoDB connection error: ", err));

// Define routes
const dataRouter = require('./routes/data');
app.use('/api/data', dataRouter);

// Catch-all handler for any request that doesn't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'webfrontend', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});