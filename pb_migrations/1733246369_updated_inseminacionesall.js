/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yvn7fsi88zzbizy")

  collection.options = {
    "query": "select \ni.id \nfrom inseminacion i\ninner join animales a on a.id = i.animal"
  }

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yvn7fsi88zzbizy")

  collection.options = {
    "query": "select id from inseminacion"
  }

  return dao.saveCollection(collection)
})
