//Need to set up a middleware
const express = require('express')
const router = express.Router()
//const mongoose = require('../db/mongosse')
const Admin = require('../models/admin')


// Getting all
router.get('/', async (req, res) => {
  try {
    const Admins = await Admin.find()
    res.json(Admins)
  } catch (err) {
    res.status(500).json({ message: err.message })
      // 500 means there is an error on your server. 
      // The server is something wrong, not the user.
  }
})

//// Getting One
//router.get('/:id', getSubscriber, (req, res) => {
  //res.json(res.user)
//})

// Creating one
router.post('/', async (req, res) => {
  
  const admin = new Admin({
    adminname: req.body.adminname,
    password: req.body.password,
    email: req.body.email,
    canvas: []
  })
  try {
    const newAdmin = await admin.save()
    res.status(201).json(admin) 
      //status 200 means successfully created an object.
  } catch (err) {
      res.status(400).json({ message: err.message })
      // 400 means there is something wrong with the admin input not the server.
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
//router.delete('/:id', getSubscriber, async (req, res) => {
  //try {
    //await res.user.remove()
    //res.json({ message: 'Deleted Subscriber' })
  //} catch (err) {
    //res.status(500).json({ message: err.message })
  //}
//})

//This is an middleware
async function getAdmin(req, res, next) {
  let admin 
  try {
    admin = await Admin.findById(req.params.id)
    if (admin == null) {
      return res.status(404).json({ message: 'Cannot find admin' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.admin = admin
  next()
}

module.exports = router
