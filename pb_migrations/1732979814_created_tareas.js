/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ectu6vn6hr0emjo",
    "created": "2024-11-30 15:16:54.936Z",
    "updated": "2024-11-30 15:16:54.936Z",
    "name": "tareas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nyxxg1p8",
        "name": "descripcion",
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
        "id": "vbidqxty",
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
  const collection = dao.findCollectionByNameOrId("ectu6vn6hr0emjo");

  return dao.deleteCollection(collection);
})
