/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hmtvwici",
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
  const collection = dao.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // remove
  collection.schema.removeField("hmtvwici")

  return dao.saveCollection(collection)
})
