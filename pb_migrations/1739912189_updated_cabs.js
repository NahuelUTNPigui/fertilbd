/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("8z26qtqk0ijsqft")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text540224921",
    "max": 0,
    "min": 0,
    "name": "codigo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("8z26qtqk0ijsqft")

  // remove field
  collection.fields.removeById("text540224921")

  return app.save(collection)
})
