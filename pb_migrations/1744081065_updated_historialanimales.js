/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("wkshl5x2211xmwq")

  // add field
  collection.fields.addAt(14, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text215316663",
    "max": 0,
    "min": 0,
    "name": "rp",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("wkshl5x2211xmwq")

  // remove field
  collection.fields.removeById("text215316663")

  return app.save(collection)
})
