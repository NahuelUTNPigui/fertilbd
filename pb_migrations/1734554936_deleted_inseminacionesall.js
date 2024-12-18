/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("yvn7fsi88zzbizy");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "yvn7fsi88zzbizy",
    "created": "2024-12-03 17:18:12.986Z",
    "updated": "2024-12-13 21:41:32.601Z",
    "name": "inseminacionesall",
    "type": "view",
    "system": false,
    "schema": [],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "select \ni.id \nfrom inseminacion i\ninner join animales a on a.id = i.animal"
    }
  });

  return Dao(db).saveCollection(collection);
})
