/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0los63kvkeoznk")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "taorygn7",
    "name": "active",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l0los63kvkeoznk")

  // remove
  collection.schema.removeField("taorygn7")

  return dao.saveCollection(collection)
})
