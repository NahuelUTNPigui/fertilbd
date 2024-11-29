/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xvzoj0ca",
    "name": "nombreveterinario",
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
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // remove
  collection.schema.removeField("xvzoj0ca")

  return dao.saveCollection(collection)
})
