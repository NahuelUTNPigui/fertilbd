/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ukhpoiov",
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
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // remove
  collection.schema.removeField("ukhpoiov")

  return dao.saveCollection(collection)
})
