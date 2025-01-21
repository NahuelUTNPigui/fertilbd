/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2v386ds3thox4sm",
    "created": "2025-01-21 18:50:54.758Z",
    "updated": "2025-01-21 18:50:54.758Z",
    "name": "permisos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cv7xtyns",
        "name": "estxcolab",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "ov7q1j53qqi5qa9",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "i1f0qpi7",
        "name": "permisos",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
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
  const collection = dao.findCollectionByNameOrId("2v386ds3thox4sm");

  return dao.deleteCollection(collection);
})
