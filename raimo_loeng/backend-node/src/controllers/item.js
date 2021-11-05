const Item = require('../models/Item')

exports.getItems = async (req, res) => {
  const items = await Item.find({})  
  res.status(200).send(items)
}

exports.createItem = async (req, res) => {
  const createdItem = new Item(req.body)
  const savedItem = await createdItem.save()
  res.status(200).send(`yey ${savedItem._id}`)
}

// Kodutöö 3
exports.updateItem = async (req, res) => {

  const {id} = req.params;
  const queryFilter = {_id: id};
  const update = req.body;
  const returnModifiedItem = {new: true};
  const updatedItem = await Item.findOneAndUpdate(queryFilter, update, returnModifiedItem)

  if (!updatedItem) res.status(404).send(`Item id:${id} was not found.`)
  res.status(200).send(`Found and updated the item: \n ${updatedItem}.`)
}

exports.incrementItemQuality = async (req, res) => {

  const {id} = req.params;

  const updatedItem = await Item.findOneAndUpdate(
    {_id: id}, 
    {$inc: {quality: 1}}, 
    {new: true }
  )

  if (!updatedItem) res.status(404).send(`Item id:${id} was not found.`)
  res.status(200).send(`Successfully updated the following item: ${updatedItem} quality.`)
}

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  const item = await Item.findOneAndDelete({_id: id})
  
  if (!item) res.status(404).send(`Item with this id: ${id} wasn't found.`)
  res.status(200).send(`Successfully deleted the following item: \n ${item}.`)
}

exports.deleteAllItems = async (req, res) => {
  const deletedItems = await Item.deleteMany()
  if (!deletedItems) res.status(404).send(`No items in DB.`)
  res.status(200).send(`Successfully deleted ${deletedItems.deletedCount}.\n`)
}