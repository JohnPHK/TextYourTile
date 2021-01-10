// import mongoose and store it in constant mongoose
const mongoose = require('mongoose');

const tileSchema = new mongoose.Schema({
  coordinate: {
    type: String,
    required: true
  }, 
  color: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('tile', tileSchema);
