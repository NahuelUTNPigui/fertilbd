/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // add field
  collection.fields.addAt(9, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text146322630",
    "max": 0,
    "min": 0,
    "name": "observacion",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("1wjwpjeun6bm4yc")

  // remove field
  collection.fields.removeById("text146322630")

  return app.save(collection)
})
