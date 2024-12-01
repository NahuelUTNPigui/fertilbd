/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ht4vqgmaf27wv2b")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hjsfp1sh",
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
  const collection = dao.findCollectionByNameOrId("ht4vqgmaf27wv2b")

  // remove
  collection.schema.removeField("hjsfp1sh")

  return dao.saveCollection(collection)
})
