const express = require('express');
const path = require('path');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

// Load environment variables from .env file
// require('dotenv').config();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get("/api", (req, res) => {
    res.json({"test": [1, 2, 3]});
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
