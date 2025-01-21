/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kmytq8zi15eg0hc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t9utkhu4",
    "name": "rol",
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
  const collection = dao.findCollectionByNameOrId("kmytq8zi15eg0hc")

  // remove
  collection.schema.removeField("t9utkhu4")

  return dao.saveCollection(collection)
})
