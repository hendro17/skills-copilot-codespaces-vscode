// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create comments array
let comments = [];

// Create endpoint to get comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create endpoint to add comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  comments.push(comment);
  res.json({ message: 'Comment added' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});