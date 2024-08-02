const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const port = process.env.PORT || 5000; // Use environment port or default to 5000

app.use(cors()); 
app.use(express.json());

const getHighestAlphabet = (alphabets) => {
  if (alphabets.length === 0) return [];
  alphabets.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  return [alphabets[alphabets.length - 1]];
};

app.post('/bfhl', (req, res) => {
  const { data } = req.body;

  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: 'Invalid input data format. Expected an array.',
    });
  }

  const numbers = data.filter((item) => !isNaN(item));
  const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));

  const highestAlphabet = getHighestAlphabet(alphabets);

  const response = {
    is_success: true,
    user_id: 'Rahul_17091999',
    email: 'Rahul@xyz.com',
    roll_number: 'AP2110011393',
    numbers: numbers,
    alphabets: alphabets,
    highest_alphabet: highestAlphabet,
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  res.status(200).json({
    operation_code: 1,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

