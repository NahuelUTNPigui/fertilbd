/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ws7ehbstl4qyf38",
    "created": "2024-12-13 21:14:16.211Z",
    "updated": "2024-12-13 21:14:16.211Z",
    "name": "lotes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gs4uzomv",
        "name": "nombre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "06qr7kl8",
        "name": "active",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ws7ehbstl4qyf38");

  return dao.deleteCollection(collection);
})
