/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("wkshl5x2211xmwq")

  // add field
  collection.fields.addAt(15, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1174591150",
    "max": 0,
    "min": 0,
    "name": "raza",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(16, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1716930793",
    "max": 0,
    "min": 0,
    "name": "color",
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
  collection.fields.removeById("text1174591150")

  // remove field
  collection.fields.removeById("text1716930793")

  return app.save(collection)
})
