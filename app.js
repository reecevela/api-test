const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON data in request body
app.use(express.json());

// Sample department data
const departments = [
  { id: 1, name: 'Human Resources' },
  { id: 2, name: 'Finance' },
  { id: 3, name: 'IT' },
  // Add more departments as needed
];

app.get('/search', (req, res) => {
  const searchTerm = req.query.q;
  if (!searchTerm) {
    return res.status(400).json({ message: 'Please provide a search term' });
  }

  const results = departments.filter((department) =>
    department.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  res.json(results);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
