/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws7ehbstl4qyf38")

  collection.createRule = "nombre != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ws7ehbstl4qyf38")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
