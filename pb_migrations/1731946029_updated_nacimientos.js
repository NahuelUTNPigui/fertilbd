/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yx98sqv2fwleevx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qp89acz7",
    "name": "observacion",
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
  const collection = dao.findCollectionByNameOrId("yx98sqv2fwleevx")

  // remove
  collection.schema.removeField("qp89acz7")

  return dao.saveCollection(collection)
})
