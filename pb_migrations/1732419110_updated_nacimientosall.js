/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4up515v6annzfg")

  collection.options = {
    "query": "select \n  n.id,n.fecha,n.madre,n.padre,n.nombremadre,n.nombrepadre,n.cab,a.caravana \nfrom nacimientos n\ninner join animales a on a.nacimiento = n.id\n"
  }

  // remove
  collection.schema.removeField("p6l8iovu")

  // remove
  collection.schema.removeField("zeg2ea2v")

  // remove
  collection.schema.removeField("0a4akqia")

  // remove
  collection.schema.removeField("hlj5u7kx")

  // remove
  collection.schema.removeField("3olourai")

  // remove
  collection.schema.removeField("iennx3qr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hp5qhymr",
    "name": "fecha",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "co7mxmtz",
    "name": "madre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y6xc6bt2otpz2pb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ztviou0o",
    "name": "padre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y6xc6bt2otpz2pb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "w3oqzsey",
    "name": "nombremadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s7sb5q8h",
    "name": "nombrepadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2h8brskm",
    "name": "cab",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8z26qtqk0ijsqft",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "beuhvh3v",
    "name": "caravana",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4up515v6annzfg")

  collection.options = {
    "query": "select id,fecha,madre,padre,nombremadre,nombrepadre,cab from nacimientos"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "p6l8iovu",
    "name": "fecha",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zeg2ea2v",
    "name": "madre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y6xc6bt2otpz2pb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0a4akqia",
    "name": "padre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "y6xc6bt2otpz2pb",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hlj5u7kx",
    "name": "nombremadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3olourai",
    "name": "nombrepadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iennx3qr",
    "name": "cab",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "8z26qtqk0ijsqft",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("hp5qhymr")

  // remove
  collection.schema.removeField("co7mxmtz")

  // remove
  collection.schema.removeField("ztviou0o")

  // remove
  collection.schema.removeField("w3oqzsey")

  // remove
  collection.schema.removeField("s7sb5q8h")

  // remove
  collection.schema.removeField("2h8brskm")

  // remove
  collection.schema.removeField("beuhvh3v")

  return dao.saveCollection(collection)
})
