/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // remove field
  collection.fields.removeById("jgcp2yik")

  // add field
  collection.fields.addAt(17, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text215316663",
    "max": 0,
    "min": 0,
    "name": "rp",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("y6xc6bt2otpz2pb")

  // add field
  collection.fields.addAt(17, new Field({
    "hidden": false,
    "id": "jgcp2yik",
    "max": null,
    "min": null,
    "name": "rp",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // remove field
  collection.fields.removeById("text215316663")

  return app.save(collection)
})
