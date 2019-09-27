const express = require('express');
const mongoose = require('mongoose');

const project = express();

project.use(express.json());


//Connect to MongoDB here
const PORT = process.env.PORT || 5000;

project.listen(PORT, () => console.log(`Server running on port: ${PORT}`));