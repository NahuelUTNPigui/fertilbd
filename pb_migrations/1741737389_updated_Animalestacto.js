/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1976919586")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id,a.caravana,a.categoria,a.prenada,a.peso,a.rodeo,a.lote,max(t.fecha) as fecha\nfrom animales a\nleft JOIN tactos t\non t.animal = a.id\ngroup  by a.id\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_J70g",
    "max": 0,
    "min": 0,
    "name": "caravana",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_M8jy",
    "max": 0,
    "min": 0,
    "name": "categoria",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "_clone_sJTP",
    "max": null,
    "min": null,
    "name": "prenada",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_YS3k",
    "max": null,
    "min": null,
    "name": "peso",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "cascadeDelete": false,
    "collectionId": "hemf1wgqs4n8x9f",
    "hidden": false,
    "id": "_clone_sYSG",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "rodeo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "ws7ehbstl4qyf38",
    "hidden": false,
    "id": "_clone_5LD2",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lote",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "json27834329",
    "maxSize": 1,
    "name": "fecha",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1976919586")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id from animales a"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_J70g")

  // remove field
  collection.fields.removeById("_clone_M8jy")

  // remove field
  collection.fields.removeById("_clone_sJTP")

  // remove field
  collection.fields.removeById("_clone_YS3k")

  // remove field
  collection.fields.removeById("_clone_sYSG")

  // remove field
  collection.fields.removeById("_clone_5LD2")

  // remove field
  collection.fields.removeById("json27834329")

  return app.save(collection)
})
