const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello from Kubernetes!',
    timestamp: new Date().toISOString(),
    version: process.env.APP_VERSION || '1.0.0',
    pod: process.env.HOSTNAME || 'unknown'
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});// Main branch change

// Login endpoint
app.post('/login', (req, res) => {
  res.json({
    message: 'Login endpoint ready',
    status: 'success',
    timestamp: new Date().toISOString()
  });
});
