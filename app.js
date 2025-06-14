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

// Dashboard endpoint
app.get('/dashboard', (req, res) => {
  res.json({
    message: 'Dashboard data',
    stats: {
      totalUsers: 25,
      activeUsers: 18,
      revenue: 'R$ 15.750,00'
    },
    timestamp: new Date().toISOString()
  });
});
