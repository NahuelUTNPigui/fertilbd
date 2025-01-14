/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yzuguk6d",
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
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq")

  // remove
  collection.schema.removeField("yzuguk6d")

  return dao.saveCollection(collection)
})
