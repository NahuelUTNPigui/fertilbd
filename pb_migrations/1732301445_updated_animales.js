/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9k2xq1mz",
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
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // remove
  collection.schema.removeField("9k2xq1mz")

  return dao.saveCollection(collection)
})
