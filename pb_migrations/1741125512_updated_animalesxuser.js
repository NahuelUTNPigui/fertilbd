/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4040813735")

  // update collection data
  unmarshal({
    "viewQuery": "select a.id,c.user \nfrom animales a\njoin cabs c on a.cab = c.id\nwhere a.active = true "
  }, collection)

  // remove field
  collection.fields.removeById("_clone_7dNd")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_G9No",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4040813735")

  // update collection data
  unmarshal({
    "viewQuery": "select a.id,c.user \nfrom animales a\njoin cabs c on a.cab = c.id"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_7dNd",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // remove field
  collection.fields.removeById("_clone_G9No")

  return app.save(collection)
})
