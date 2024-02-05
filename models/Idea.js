const mongoose = require('mongoose');//we bring in mongoose

const IdeaSchema = new mongoose.Schema({ //create a new mongoose schema instance. It takes an object with all the properties that a schema should include
    text: {
        type: String,
        required: [true, 'Please add a text field']//giving us backend validation
    },
    tag: {
        type: String,   
    },
    username: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});
//exporting this to routes folder
module.exports = mongoose.model('Idea', IdeaSchema); //exporting the Idea file and the Idea schema we just created