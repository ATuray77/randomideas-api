const express = require('express');
const router = express.Router();
const Idea = require('../models/Idea');//brings model in. enable us to get ideas from the db direct instead of from the ideas file

const ideas = [
    {
      id: 1,
      text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
      tag: 'Technology',
      username: 'TonyStark',
      date: '2022-01-02',
    },
    {
      id: 2,
      text: 'Milk cartons that turn a different color the older that your milk is getting',
      tag: 'Inventions',
      username: 'SteveRogers',
      date: '2022-01-02',
    },
    {
      id: 3,
      text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
      tag: 'Software',
      username: 'BruceBanner',
      date: '2022-01-02',
    },
  ];

// Get all ideas
router.get('/', async (req, res) => { // async provides a promise and await
  try {
    const ideas = await Idea.find();//we get the ideas from the db by calling await and use find() method on Idea model to find all ideas
    res.json({ success: true, data: ideas });//this is the response
  } catch (error) { //if something goes wrong
    res.status(500).json({ success: false, error: 'Something went wrong'})
    console.log(error)
  }
});

// Get single idea
router.get('/:id', async (req, res) => {
  try {
    const idea = await Idea.findById(req.params.id);
    res.json({ success: true, data: idea });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Add an idea
//we want to instantiate our new idea using our model. ID is automatically provided by mongodb, date is now a default value prescribed in the model
router.post('/', async (req, res) => {
  const idea = new Idea ({ //all the following information are coming from the http request body
    text: req.body.text, 
    tag: req.body.tag,
    username: req.body.username,
  });

  try { //using try on the idea object instantiated by the constructor, instead of the Idea model
    const savedIdea = await idea.save();//calling save method to save the idea object to the db
    res.json({ success: true, data: savedIdea}) //sending savedIdea back to the client
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong'})
    console.log(error);
  }
});

// Update idea
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({ success: true, data: idea });
});

// Delete idea
router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);

  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }

  const index = ideas.indexOf(idea);
  ideas.splice(index, 1); //the index here would be the id that's passed in

  res.json({ success: true, data: {} });
});

module.exports = router;
