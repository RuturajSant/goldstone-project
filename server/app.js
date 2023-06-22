const express = require('express');
const cors = require('cors');
require('./config/db')

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', require('./routes'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});