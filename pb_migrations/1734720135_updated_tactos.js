/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // remove
  collection.schema.removeField("juocrrtc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zm2zxzdj",
    "name": "prenada",
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
  const collection = dao.findCollectionByNameOrId("v1fyd3r0rjy6hq6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "juocrrtc",
    "name": "prenada",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("zm2zxzdj")

  return dao.saveCollection(collection)
})
