/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1976919586")

  // update collection data
  unmarshal({
    "viewQuery": "SELECT a.id,a.caravana,a.fechanacimiento,a.categoria,a.prenada,a.peso,a.rodeo,a.lote,a.sexo,a.cab,a.active ,max(t.fecha) as fechatacto,max(s.fechadesde) as fechaser,max(i.fechainseminacion) as fechains \nfrom animales a\nleft JOIN tactos t\non t.animal = a.id and t.active = true\nleft join servicios s\n  on s.madre = a.id and s.active = true\nleft join inseminacion i\n  on i.animal = s.id and i.active = true\nwhere \n  a.active = true \ngroup  by a.id\n"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_ns2C")

  // remove field
  collection.fields.removeById("_clone_sBBm")

  // remove field
  collection.fields.removeById("_clone_nNm3")

  // remove field
  collection.fields.removeById("_clone_D4EE")

  // remove field
  collection.fields.removeById("_clone_bodP")

  // remove field
  collection.fields.removeById("_clone_MwhA")

  // remove field
  collection.fields.removeById("_clone_qM0b")

  // remove field
  collection.fields.removeById("_clone_x04B")

  // remove field
  collection.fields.removeById("_clone_JSPm")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_8son",
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
    "hidden": false,
    "id": "_clone_Kudx",
    "max": "",
    "min": "",
    "name": "fechanacimiento",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_BQj0",
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
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "_clone_O3Ww",
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
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "_clone_u2eN",
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
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "hemf1wgqs4n8x9f",
    "hidden": false,
    "id": "_clone_A5ut",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "rodeo",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "ws7ehbstl4qyf38",
    "hidden": false,
    "id": "_clone_AOzI",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "lote",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Dnrp",
    "max": 0,
    "min": 0,
    "name": "sexo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "_clone_MEhO",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "_clone_FHnc",
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
    "viewQuery": "SELECT a.id,a.caravana,a.categoria,a.prenada,a.peso,a.rodeo,a.lote,a.sexo,a.cab,a.active ,max(t.fecha) as fechatacto,max(s.fechadesde) as fechaser,max(i.fechainseminacion) as fechains \nfrom animales a\nleft JOIN tactos t\non t.animal = a.id and t.active = true\nleft join servicios s\n  on s.madre = a.id and s.active = true\nleft join inseminacion i\n  on i.animal = s.id and i.active = true\nwhere \n  a.active = true \ngroup  by a.id\n"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_ns2C",
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
    "id": "_clone_sBBm",
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
    "id": "_clone_nNm3",
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
    "id": "_clone_D4EE",
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
    "id": "_clone_bodP",
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
    "id": "_clone_MwhA",
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
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_qM0b",
    "max": 0,
    "min": 0,
    "name": "sexo",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "_clone_x04B",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "_clone_JSPm",
    "name": "active",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // remove field
  collection.fields.removeById("_clone_8son")

  // remove field
  collection.fields.removeById("_clone_Kudx")

  // remove field
  collection.fields.removeById("_clone_BQj0")

  // remove field
  collection.fields.removeById("_clone_O3Ww")

  // remove field
  collection.fields.removeById("_clone_u2eN")

  // remove field
  collection.fields.removeById("_clone_A5ut")

  // remove field
  collection.fields.removeById("_clone_AOzI")

  // remove field
  collection.fields.removeById("_clone_Dnrp")

  // remove field
  collection.fields.removeById("_clone_MEhO")

  // remove field
  collection.fields.removeById("_clone_FHnc")

  return app.save(collection)
})
