/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yx98sqv2fwleevx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qe3xtbfp",
    "name": "nombremadre",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uxihdl1o",
    "name": "nombrepadre",
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
  collection.schema.removeField("qe3xtbfp")

  // remove
  collection.schema.removeField("uxihdl1o")

  return dao.saveCollection(collection)
})
