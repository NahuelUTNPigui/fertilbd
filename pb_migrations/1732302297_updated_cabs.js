/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8z26qtqk0ijsqft")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lhws5nga",
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
  const collection = dao.findCollectionByNameOrId("8z26qtqk0ijsqft")

  // remove
  collection.schema.removeField("lhws5nga")

  return dao.saveCollection(collection)
})
