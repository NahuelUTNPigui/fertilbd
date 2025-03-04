/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4040813735")

  // update collection data
  unmarshal({
    "name": "Animalesxuser",
    "viewQuery": "select a.id,c.user,a.active\nfrom animales a\njoin cabs c on a.cab = c.id\nwhere a.active = TRUE"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_G9No")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "_pb_users_auth_",
    "hidden": false,
    "id": "_clone_c1Cf",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "user",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_NlsL",
    "name": "active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4040813735")

  // update collection data
  unmarshal({
    "name": "animalesxuser",
    "viewQuery": "select a.id,c.user \nfrom animales a\njoin cabs c on a.cab = c.id\nwhere a.active = true "
  }, collection)

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

  // remove field
  collection.fields.removeById("_clone_c1Cf")

  // remove field
  collection.fields.removeById("_clone_NlsL")

  return app.save(collection)
})
