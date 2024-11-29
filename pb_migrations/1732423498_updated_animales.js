/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kab2yp4q",
    "name": "rodeo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hemf1wgqs4n8x9f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // remove
  collection.schema.removeField("kab2yp4q")

  return dao.saveCollection(collection)
})
