/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6qyvmrsi",
    "name": "nacimiento",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // remove
  collection.schema.removeField("6qyvmrsi")

  return dao.saveCollection(collection)
})
