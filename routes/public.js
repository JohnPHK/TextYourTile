const express = require('express')
const router = express.Router()
const Tile = require('../models/tile')


/* GET public Tile */
router.get('/', async (req, res) => {
  try {
    const tile = await Tile.find()
    res.json(tile)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


router.get('/:id', async (req, res) => {
  let id 
  try {
    tile = await Tile.findById(req.params.id)
    if (id == null) {
      return res.status(404).json({ message: 'Cannot find the tile' })
      //Something wrong with user input.
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.send(tile)
})

router.post('/', async (req, res) => {
  const tile = new Tile({
    coordinate: req.body.coordinate,
    color: req.body.color,
    text: req.body.text
  })
  
  try {
    const newTile = await tile.save()
    res.status(201).json(tile)
  } catch (err) {
    res.stats(400).json({ message: err.message })
  }
})

//// Deleting One
router.delete('/:id', getTile, async (req, res) => {
  try {
    await res.tile.remove()
    res.json({ message: 'Deleted Tile' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

//This is an middleware
async function getTile(req, res, next) {
  let tile 
  try {
    tile = await Tile.findById(req.params.id)
    if (tile == null) {
      return res.status(404).json({ message: 'Cannot find the tile' })
    }
  } catch (err) {
    console.log("hello");
    return res.status(500).json({ message: err.message })
  }

  res.tile = tile 
  next()
}


module.exports = router
