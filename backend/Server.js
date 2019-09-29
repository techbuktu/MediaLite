const express = require('express');
const mongoose = require('mongoose');

const project = express();

project.use(express.json());

//Default route for the project
project.get('/', (req, res) => {
    res.send('Welcome to the MediaLite platform!')
})

//Import route project's route modules
// 'Manager' API section's routes 
project.use('/api/manager/auth', require('./routes/manager/auth'))
project.use('/api/manager/editors', require('./routes/manager/editors'))
project.use('/api/manager/auth', require('./routes/manager/auth'))

//'Publisher' API section's routes
project.use('/api/publisher/articles', require('./routes/publisher/articles'))
project.use('/api/publisher/comments', require('./routes/publisher/comments'))

//Connect to MongoDB here
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))


const PORT = process.env.PORT || 5000;

project.listen(PORT, () => console.log(`Server running on port: ${PORT}`));