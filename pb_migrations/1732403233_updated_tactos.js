/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dc8qixoq",
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
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // remove
  collection.schema.removeField("dc8qixoq")

  return dao.saveCollection(collection)
})
