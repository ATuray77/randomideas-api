const path = require('path');//bring this in in order to use path.join method
const express = require('express'); //access express
require('dotenv').config();//accesses .env file
const port = process.env.PORT || 5000; //access db thorough either the env port or port 5000
const connectDB = require('./config/db')// access connections variable

connectDB();

const app = express();

//static folder
app.use(express.static(path.join(__dirname, 'public')));//a middleware to make the public folder static so we can put html and css file into it. __dirname represents the current folder which we are joining to the public folder

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.json({ Message: 'Welcome to the RandomIdeas API'});
});

const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);


app.listen(port, () => console.log(`Server listening on port ${port}`));