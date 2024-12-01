/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8z26qtqk0ijsqft")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "irjkdvsi",
    "name": "resma",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8z26qtqk0ijsqft")

  // remove
  collection.schema.removeField("irjkdvsi")

  return dao.saveCollection(collection)
})
