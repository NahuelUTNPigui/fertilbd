/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("9vjkyl723099jr8")

  // update collection data
  unmarshal({
    "viewQuery": "select \nn.id,n.fecha,n.madre,n.padre,n.nombremadre,n.nombrepadre,n.cab,n.observacion,a.caravana,a.id as animalid \nfrom nacimientos n\nLEFT join animales a on a.nacimiento = n.id"
  }, collection)

  // remove field
  collection.fields.removeById("_clone_KH3r")

  // remove field
  collection.fields.removeById("_clone_vgVV")

  // remove field
  collection.fields.removeById("_clone_mCxx")

  // remove field
  collection.fields.removeById("_clone_qa2X")

  // remove field
  collection.fields.removeById("_clone_xTVr")

  // remove field
  collection.fields.removeById("_clone_sBnu")

  // remove field
  collection.fields.removeById("_clone_o5Q8")

  // remove field
  collection.fields.removeById("_clone_HTvT")

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_kjUy",
    "max": "",
    "min": "",
    "name": "fecha",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "y6xc6bt2otpz2pb",
    "hidden": false,
    "id": "_clone_0aIh",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "madre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "y6xc6bt2otpz2pb",
    "hidden": false,
    "id": "_clone_MtlE",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "padre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_zhUA",
    "max": 0,
    "min": 0,
    "name": "nombremadre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_U40a",
    "max": 0,
    "min": 0,
    "name": "nombrepadre",
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
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "_clone_wua6",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_Dc1q",
    "max": 0,
    "min": 0,
    "name": "observacion",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_g2Za",
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("9vjkyl723099jr8")

  // update collection data
  unmarshal({
    "viewQuery": "select \nn.id,n.fecha,n.madre,n.padre,n.nombremadre,n.nombrepadre,n.cab,n.observacion,a.caravana,a.id as animalid \nfrom nacimientos n\ninner join animales a on a.nacimiento = n.id"
  }, collection)

  // add field
  collection.fields.addAt(1, new Field({
    "hidden": false,
    "id": "_clone_KH3r",
    "max": "",
    "min": "",
    "name": "fecha",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "y6xc6bt2otpz2pb",
    "hidden": false,
    "id": "_clone_vgVV",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "madre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "y6xc6bt2otpz2pb",
    "hidden": false,
    "id": "_clone_mCxx",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "padre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_qa2X",
    "max": 0,
    "min": 0,
    "name": "nombremadre",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_xTVr",
    "max": 0,
    "min": 0,
    "name": "nombrepadre",
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
    "collectionId": "8z26qtqk0ijsqft",
    "hidden": false,
    "id": "_clone_sBnu",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "cab",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_o5Q8",
    "max": 0,
    "min": 0,
    "name": "observacion",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "_clone_HTvT",
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

  // remove field
  collection.fields.removeById("_clone_kjUy")

  // remove field
  collection.fields.removeById("_clone_0aIh")

  // remove field
  collection.fields.removeById("_clone_MtlE")

  // remove field
  collection.fields.removeById("_clone_zhUA")

  // remove field
  collection.fields.removeById("_clone_U40a")

  // remove field
  collection.fields.removeById("_clone_wua6")

  // remove field
  collection.fields.removeById("_clone_Dc1q")

  // remove field
  collection.fields.removeById("_clone_g2Za")

  return app.save(collection)
})
