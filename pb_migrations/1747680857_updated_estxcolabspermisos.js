/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_947593041")

  // update collection data
  unmarshal({
    "viewQuery": "select e.cab,e.colab,e.created,e.id,e.updated,p.permisos,p.id as permiso\nfrom estxcolabs e\ninner join permisos p on p.estxcolab = e.id"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_7HcN")

  // remove field
  collection.fields.removeById("_clone_6YsP")

  // remove field
  collection.fields.removeById("_clone_CD3V")

  // remove field
  collection.fields.removeById("_clone_Za7t")

  // remove field
  collection.fields.removeById("_clone_UoB6")

  // add field
  collection.fields.addAt(0, new Field({
    "cascadeDelete": false,
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "_clone_eVWF",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "kmytq8zi15eg0hc",
    "hidden": false,
    "id": "_clone_aZrX",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "colab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_APhb",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_mJ7K",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_20WA",
    "max": 0,
    "min": 0,
    "name": "permisos",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "2v386ds3thox4sm",
    "hidden": false,
    "id": "relation4252674974",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "permiso",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_947593041")

  // update collection data
  unmarshal({
    "viewQuery": "select e.cab,e.colab,e.created,e.id,e.updated,p.permisos\nfrom estxcolabs e\ninner join permisos p on p.estxcolab = e.id"
  }, collection)

  // add field
  collection.fields.addAt(0, new Field({
    "cascadeDelete": false,
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "_clone_7HcN",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "kmytq8zi15eg0hc",
    "hidden": false,
    "id": "_clone_6YsP",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "colab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "_clone_CD3V",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_Za7t",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_UoB6",
    "max": 0,
    "min": 0,
    "name": "permisos",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // remove field
  collection.fields.removeById("_clone_eVWF")

  // remove field
  collection.fields.removeById("_clone_aZrX")

  // remove field
  collection.fields.removeById("_clone_APhb")

  // remove field
  collection.fields.removeById("_clone_mJ7K")

  // remove field
  collection.fields.removeById("_clone_20WA")

  // remove field
  collection.fields.removeById("relation4252674974")

  return app.save(collection)
})
