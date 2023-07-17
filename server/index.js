const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Proxy API requests to the Express backend
app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:3000', // Change this if your Express server is running on a different port
    changeOrigin: true,
  })
);

// Start the Next.js server
app.listen(3000, () => {
  console.log('Next.js server listening on port 3000');
});
