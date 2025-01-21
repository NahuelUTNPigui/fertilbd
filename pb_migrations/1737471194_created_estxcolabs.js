/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ov7q1j53qqi5qa9",
    "created": "2025-01-21 14:53:14.332Z",
    "updated": "2025-01-21 14:53:14.332Z",
    "name": "estxcolabs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pyfa6tdb",
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
      },
      {
        "system": false,
        "id": "t7e00klb",
        "name": "colab",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "kmytq8zi15eg0hc",
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
  const collection = dao.findCollectionByNameOrId("ov7q1j53qqi5qa9");

  return dao.deleteCollection(collection);
})
