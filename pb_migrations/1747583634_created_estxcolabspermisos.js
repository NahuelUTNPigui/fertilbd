/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "cascadeDelete": false,
        "collectionId": "8z26qtqk0ijsqft",
        "hidden": false,
        "id": "_clone_yQC0",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "cab",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "kmytq8zi15eg0hc",
        "hidden": false,
        "id": "_clone_cvRN",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "colab",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "_clone_32Zy",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_QYkE",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "_clone_j25q",
        "max": 0,
        "min": 0,
        "name": "permisos",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      }
    ],
    "id": "pbc_947593041",
    "indexes": [],
    "listRule": null,
    "name": "estxcolabspermisos",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "select e.cab,e.colab,e.created,e.id,e.updated,p.permisos\nfrom estxcolabs e\ninner join permisos p on p.estxcolab = e.id",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_947593041");

  return app.delete(collection);
})
