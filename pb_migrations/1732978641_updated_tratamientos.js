/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qn6wjrvdzfjpa3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pgjpfsec",
    "name": "tipo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ht4vqgmaf27wv2b",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4qn6wjrvdzfjpa3")

  // remove
  collection.schema.removeField("pgjpfsec")

  return dao.saveCollection(collection)
})
