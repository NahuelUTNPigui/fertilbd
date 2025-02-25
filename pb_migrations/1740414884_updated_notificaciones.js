/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_555007670")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "bool226642085",
    "name": "leido",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_555007670")

  // remove field
  collection.fields.removeById("bool226642085")

  return app.save(collection)
})
