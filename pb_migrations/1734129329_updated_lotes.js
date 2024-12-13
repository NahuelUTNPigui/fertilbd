/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws7ehbstl4qyf38")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k3t2ivus",
    "name": "cab",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8z26qtqk0ijsqft",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws7ehbstl4qyf38")

  // remove
  collection.schema.removeField("k3t2ivus")

  return dao.saveCollection(collection)
})
