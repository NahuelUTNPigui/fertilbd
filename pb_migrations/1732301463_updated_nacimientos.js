/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yx98sqv2fwleevx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7qqjalvx",
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
  const collection = dao.findCollectionByNameOrId("yx98sqv2fwleevx")

  // remove
  collection.schema.removeField("7qqjalvx")

  return dao.saveCollection(collection)
})
