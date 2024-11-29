/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yx98sqv2fwleevx",
    "created": "2024-11-17 21:01:34.834Z",
    "updated": "2024-11-17 21:01:34.834Z",
    "name": "nacimientos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "x0bqxnl2",
        "name": "fecha",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "gebyexsz",
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
      },
      {
        "system": false,
        "id": "gih4ioaq",
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
  const collection = dao.findCollectionByNameOrId("yx98sqv2fwleevx");

  return dao.deleteCollection(collection);
})
