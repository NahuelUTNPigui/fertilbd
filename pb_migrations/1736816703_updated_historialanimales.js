/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq")

  // remove
  collection.schema.removeField("rqtp5jwt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rqtp5jwt",
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

  return dao.saveCollection(collection)
})
