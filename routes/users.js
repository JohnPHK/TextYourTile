//Need to set up a middleware
const express = require('express')
const router = express.Router()
//const mongoose = require('../db/mongosse')
const User = require('../models/user')


// Getting all
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    res.json(users)
  } catch (err) {
    res.status(500).json({ message: err.message })
      // 500 means there is an error on your server. 
      // The server is something wrong, not the user.
  }
})

// Getting One
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

// Creating one
router.post('/', async (req, res) => {
  
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  })
  try {
    const newUser = await user.save()
    res.status(201).json(user) 
      //status 200 means successfully created an object.
  } catch (err) {
      res.status(400).json({ message: err.message })
      // 400 means there is something wrong with the user input not the server.
  }
})

//// Updating One
//router.patch('/:id', getSubscriber, async (req, res) => {
  //if (req.body.name != null) {
    //res.user.name = req.body.name
  //}
  //if (req.body.subscribedToChannel != null) {
    //res.user.subscribedToChannel = req.body.subscribedToChannel
  //}
  //try {
    //const updatedSubscriber = await res.user.save()
    //res.json(updatedSubscriber)
  //} catch (err) {
    //res.status(400).json({ message: err.message })
  //}
//})

//// Deleting One
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted User' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//This is an middleware
async function getUser(req, res, next) {
  let user 
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router
