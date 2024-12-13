/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "yvn7fsi88zzbizy",
    "created": "2024-12-03 17:18:12.986Z",
    "updated": "2024-12-03 17:18:12.986Z",
    "name": "inseminacionesall",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "select id from inseminacion"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yvn7fsi88zzbizy");

  return dao.deleteCollection(collection);
})
