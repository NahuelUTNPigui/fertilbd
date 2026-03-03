/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_548367264")

  // update collection data
  unmarshal({
    "viewQuery": "select u.codigo as id, u.id as userid from users u"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "relation4046612846",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "userid",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_548367264")

  // update collection data
  unmarshal({
    "viewQuery": "select codigo as id from users"
  }, collection)

  // remove field
  collection.fields.removeById("relation4046612846")

  return app.save(collection)
})
