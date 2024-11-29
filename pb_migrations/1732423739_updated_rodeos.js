/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hemf1wgqs4n8x9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5yuyyuz5",
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
  const collection = dao.findCollectionByNameOrId("hemf1wgqs4n8x9f")

  // remove
  collection.schema.removeField("5yuyyuz5")

  return dao.saveCollection(collection)
})
