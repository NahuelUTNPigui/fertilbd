/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cekymfxy",
    "name": "peso",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // remove
  collection.schema.removeField("cekymfxy")

  return dao.saveCollection(collection)
})
