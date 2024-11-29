/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "wkshl5x2211xmwq",
    "created": "2024-11-21 01:22:12.074Z",
    "updated": "2024-11-21 01:22:12.074Z",
    "name": "historialanimales",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "4oqil8zl",
        "name": "animal",
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
  const collection = dao.findCollectionByNameOrId("wkshl5x2211xmwq");

  return dao.deleteCollection(collection);
})
