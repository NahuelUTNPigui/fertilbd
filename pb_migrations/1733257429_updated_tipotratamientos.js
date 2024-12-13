/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ht4vqgmaf27wv2b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4tun6diz",
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
  const collection = dao.findCollectionByNameOrId("ht4vqgmaf27wv2b")

  // remove
  collection.schema.removeField("4tun6diz")

  return dao.saveCollection(collection)
})
