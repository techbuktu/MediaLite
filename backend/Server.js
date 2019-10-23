const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const project = express();

project.use(express.json());
project.use(cors()); //Enable CORS headers during development 

//Default route for the project
project.get('/', (req, res) => {
    res.send('Welcome to the MediaLite platform!')
})

//Import route project's route modules
// 'Manager' API section's routes 
project.use('/api/manager/auth', require('./routes/manager/auth'))
project.use('/api/manager/users', require('./routes/manager/users'))
project.use('/api/manager/editors', require('./routes/manager/editors'))
project.use('/api/manager/writers', require('./routes/manager/writers'))

//'Publisher' API section's routes
project.use('/api/publisher/articles', require('./routes/publisher/articles'))
project.use('/api/publisher/comments', require('./routes/publisher/comments'))


//Authentication routes 
project.use('/api/auth', require('./routes/manager/auth'));
//Connect to remote MongoDB Atlas DB here 
/*
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))
*/
const mongoURL = 'mongodb://127.0.0.1:27017/medialite'
mongoose.connect(mongoURL, 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
    );
const db = mongoose.connection;
db
.once('open', () => console.log(`Local MongoDB connected`))
.on('error', err => console.log(`Local MongoDB connection error: ${err}`));

const PORT = process.env.PORT || 5000;

project.listen(PORT, () => console.log(`Server running on port: ${PORT}`));