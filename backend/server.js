const express = require('express');
const path = require('path');
const cors = require('cors'); 
const appRoutes = require('./app/routes/appRoute')
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', appRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
