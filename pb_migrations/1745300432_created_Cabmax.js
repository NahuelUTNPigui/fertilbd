/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": null,
    "deleteRule": null,
    "fields": [
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text3208210256",
        "max": 0,
        "min": 0,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "_clone_UzGn",
        "max": null,
        "min": null,
        "name": "nivel",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number3403697120",
        "max": null,
        "min": null,
        "name": "cantidadanimales",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      }
    ],
    "id": "pbc_2271152128",
    "indexes": [],
    "listRule": null,
    "name": "Cabmax",
    "system": false,
    "type": "view",
    "updateRule": null,
    "viewQuery": "select cab.id, u.nivel, count(a.id) as cantidadanimales\n                    from cabs cab\n                    inner join users u on cab.user = u.id\n                    inner join cabs cabdemas on cabdemas.user = u.id\n                    inner join animales a on cabdemas.id = a.cab\nwhere a.active",
    "viewRule": null
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2271152128");

  return app.delete(collection);
})
