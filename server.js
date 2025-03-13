const express = require('express');
const { collectDefaultMetrics, register } = require('prom-client');
const path = require('path');  // Added path module
const app = express();
const port = 80;

// Initialize default metrics
collectDefaultMetrics();

// Metrics endpoint should come FIRST
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    // Ensure error responses are text/plain
    res.status(500)
       .set('Content-Type', 'text/plain')
       .send(error.message);
  }
});

// Serve static Angular files
app.use(express.static(path.join(__dirname, 'dist/frontend')));

// Handle client-side routing - return index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/frontend/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});