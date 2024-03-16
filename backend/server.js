// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Example data
const responseData = { message: 'Hello from backend!' };

// Middleware
app.use(bodyParser.json());

// Example API endpoint
app.get('/api/data', (req, res) => {
  // Set Content-Type header to application/json
  res.setHeader('Content-Type', 'application/json');
  // Send JSON response
  res.status(200).json(responseData);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
