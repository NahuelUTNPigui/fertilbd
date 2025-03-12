/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1976919586")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id,a.caravana,a.categoria,a.prenada,a.peso,a.rodeo,a.lote,a.active,max(t.fecha) as fecha\nfrom animales a\nleft JOIN tactos t\non t.animal = a.id\nwhere \n  a.active = true and 1 = 1\ngroup  by a.id\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_zp01")

  // remove field
  collection.fields.removeById("_clone_0Ljg")

  // remove field
  collection.fields.removeById("_clone_8euo")

  // remove field
  collection.fields.removeById("_clone_YINZ")

  // remove field
  collection.fields.removeById("_clone_22I5")

  // remove field
  collection.fields.removeById("_clone_GbqB")

  // remove field
  collection.fields.removeById("_clone_rt0o")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_B005",
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
    "id": "_clone_bACM",
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
    "id": "_clone_g91c",
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
    "id": "_clone_cYUX",
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
    "id": "_clone_O012",
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
    "id": "_clone_reDl",
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
    "id": "_clone_4lv1",
    "name": "active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1976919586")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id,a.caravana,a.categoria,a.prenada,a.peso,a.rodeo,a.lote,a.active,max(t.fecha) as fecha\nfrom animales a\nleft JOIN tactos t\non t.animal = a.id\nwhere \n  a.active = true\ngroup  by a.id\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_zp01",
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
    "id": "_clone_0Ljg",
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
    "id": "_clone_8euo",
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
    "id": "_clone_YINZ",
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
    "id": "_clone_22I5",
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
    "id": "_clone_GbqB",
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
    "id": "_clone_rt0o",
    "name": "active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("_clone_B005")

  // remove field
  collection.fields.removeById("_clone_bACM")

  // remove field
  collection.fields.removeById("_clone_g91c")

  // remove field
  collection.fields.removeById("_clone_cYUX")

  // remove field
  collection.fields.removeById("_clone_O012")

  // remove field
  collection.fields.removeById("_clone_reDl")

  // remove field
  collection.fields.removeById("_clone_4lv1")

  return app.save(collection)
})
