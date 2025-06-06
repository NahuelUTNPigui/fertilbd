/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
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
      }
    ],
    "id": "pbc_1976919586",
    "indexes": [],
    "listRule": null,
    "name": "Animalestacto",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "SELECT a.id from animales a",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1976919586");

  return app.delete(collection);
})
