/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hemf1wgqs4n8x9f")

  collection.createRule = "nombre != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("hemf1wgqs4n8x9f")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
