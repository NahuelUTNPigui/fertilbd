/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6kxvxxqq",
    "name": "fechainseminacion",
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
  const collection = dao.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // remove
  collection.schema.removeField("6kxvxxqq")

  return dao.saveCollection(collection)
})
