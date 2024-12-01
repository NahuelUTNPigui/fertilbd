/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ht4vqgmaf27wv2b",
    "created": "2024-11-30 14:54:07.411Z",
    "updated": "2024-11-30 14:54:07.411Z",
    "name": "tipotratamientos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "tfwoutge",
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
  const collection = dao.findCollectionByNameOrId("ht4vqgmaf27wv2b");

  return dao.deleteCollection(collection);
})
