/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // remove
  collection.schema.removeField("fdctxtoe")

  // remove
  collection.schema.removeField("dcpojmsx")

  // remove
  collection.schema.removeField("vftckc8z")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fdctxtoe",
    "name": "pcpp",
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
    "id": "dcpojmsx",
    "name": "fechadesde",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vftckc8z",
    "name": "fechahasta",
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
