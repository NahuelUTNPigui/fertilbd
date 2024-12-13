/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qn6wjrvdzfjpa3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "05fxy0tc",
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
  const collection = dao.findCollectionByNameOrId("4qn6wjrvdzfjpa3")

  // remove
  collection.schema.removeField("05fxy0tc")

  return dao.saveCollection(collection)
})
