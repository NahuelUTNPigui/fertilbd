/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_548367264")

  // update collection data
  unmarshal({
    "viewQuery": "select u.codigo as id, u.id as userid,u.nivel from users u"
  }, collection)

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_KK4l",
    "max": null,
    "min": null,
    "name": "nivel",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_548367264")

  // update collection data
  unmarshal({
    "viewQuery": "select u.codigo as id, u.id as userid from users u"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_KK4l")

  return app.save(collection)
})
