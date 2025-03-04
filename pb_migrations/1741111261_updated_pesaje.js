/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("u2exdlu9n23xo79")

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "relation1787492089",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("u2exdlu9n23xo79")

  // remove field
  collection.fields.removeById("relation1787492089")

  return app.save(collection)
})
