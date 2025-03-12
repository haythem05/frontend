const express = require('express');
const { collectDefaultMetrics, register } = require('prom-client');
const app = express();
const port = 80; // Same as the port your Angular app is running on

// Initialize the default Prometheus metrics (e.g., up, nodejs process metrics)
collectDefaultMetrics();

// Serve Prometheus metrics on the /metrics endpoint
app.get('/metrics', async (req, res) => {
  try {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  } catch (error) {
    res.status(500).send(error);
  }
});

// Serve the Angular application
app.use(express.static('dist/frontend')); // Make sure this matches your build directory

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
