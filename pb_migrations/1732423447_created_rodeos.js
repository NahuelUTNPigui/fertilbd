/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "hemf1wgqs4n8x9f",
    "created": "2024-11-24 04:44:07.968Z",
    "updated": "2024-11-24 04:44:07.968Z",
    "name": "rodeos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pq3vwqcs",
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
        "id": "sqyiyaku",
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
  const collection = dao.findCollectionByNameOrId("hemf1wgqs4n8x9f");

  return dao.deleteCollection(collection);
})
