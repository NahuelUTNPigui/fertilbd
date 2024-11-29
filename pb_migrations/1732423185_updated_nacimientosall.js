/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h4up515v6annzfg")

  collection.options = {
    "query": "select \nn.id,n.fecha,n.madre,n.padre,n.nombremadre,n.nombrepadre,n.cab,n.observacion,a.caravana \nfrom nacimientos n\ninner join animales a on a.nacimiento = n.id\n"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e3ggc9fg",
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
    "id": "0trlhbvj",
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
    "id": "jjwqb44a",
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
    "id": "isfkekvd",
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
    "id": "2fv17jea",
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
    "id": "fgvsiwrl",
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
    "id": "urktxnzi",
    "name": "observacion",
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
    "id": "gxxsk7yk",
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
    "query": "select \n  n.id,n.fecha,n.madre,n.padre,n.nombremadre,n.nombrepadre,n.cab,a.caravana \nfrom nacimientos n\ninner join animales a on a.nacimiento = n.id\n"
  }

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

  // remove
  collection.schema.removeField("e3ggc9fg")

  // remove
  collection.schema.removeField("0trlhbvj")

  // remove
  collection.schema.removeField("jjwqb44a")

  // remove
  collection.schema.removeField("isfkekvd")

  // remove
  collection.schema.removeField("2fv17jea")

  // remove
  collection.schema.removeField("fgvsiwrl")

  // remove
  collection.schema.removeField("urktxnzi")

  // remove
  collection.schema.removeField("gxxsk7yk")

  return dao.saveCollection(collection)
})
