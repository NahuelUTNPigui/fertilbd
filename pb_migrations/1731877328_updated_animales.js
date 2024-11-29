/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pmiuvpjv",
    "name": "nacimiento",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yx98sqv2fwleevx",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6qyvmrsi",
    "name": "fechanacimiento",
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
  collection.schema.removeField("pmiuvpjv")

  // update
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
})
