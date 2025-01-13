/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2vczkisq",
    "name": "lote",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ws7ehbstl4qyf38",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cioonyug",
    "name": "rodeo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hemf1wgqs4n8x9f",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7fszachx",
    "name": "categoria",
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
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq")

  // remove
  collection.schema.removeField("2vczkisq")

  // remove
  collection.schema.removeField("cioonyug")

  // remove
  collection.schema.removeField("7fszachx")

  return dao.saveCollection(collection)
})
