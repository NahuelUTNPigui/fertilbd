function showBody(e){
    const info = e.requestInfo()
    
    Object.keys(info.body).forEach(function(key,index) {
        console.log("KEY:" + key)
        console.log("VALOR: " + info.body[key])
    })
}
function getBody(e){
    const info = e.requestInfo()
    return info.body
}
//http://127.0.0.1:9991/
routerAdd("GET", "/hello/{name}", (e) => {
    console.log("x")
    let name = e.request.pathValue("name")
    
    return e.json(200, { "message": "Hello " + name })
})
routerAdd("GET","/api/creciente/colabmax/{idcab}",(e)=>{
    let idcab = e.request.pathValue("idcab")
    const result = new DynamicModel({
        // describe the shape of the data (used also as initial values)
        // the keys cannot start with underscore and must be a valid Go struct field name
        //"id":     "",
        "nivel": 0,
        "cantidadcolabs":0, // use -0 for a float value
    })
    //Tira error si no hay animales activos
    try{
        $app.db()
            .newQuery(`select cab.id, u.nivel, count(a.id) as cantidadcolabs
                        from cabs cab
                        inner join users u on cab.user = u.id
                        inner join cabs cabdemas on cabdemas.user = u.id
                        inner join estxcolabs e on cabdemas.id = e.cab
                        where cab.id ="${idcab}" 
            `).one(result)
        return e.json(200,{
            result
        });
    }catch(err){
        $app.db()
            .newQuery(`select cab.id, u.nivel, 0 as cantidadcolabs
                        from cabs cab
                        inner join users u on cab.user = u.id
                        where cab.id ="${idcab}" 
            `).one(result)
        return e.json(200,{
            result
        });
    }
    
})
routerAdd("GET","/api/creciente/cabmax/{idcab}",(e)=>{
    let idcab = e.request.pathValue("idcab")
    const result = new DynamicModel({
        // describe the shape of the data (used also as initial values)
        // the keys cannot start with underscore and must be a valid Go struct field name
        //"id":     "",
        "nivel": 0,
        "cantidadanimales":    0, // use -0 for a float value
    })
    //Tira error si no hay animales activos
    try{
        $app.db()
            .newQuery(`select cab.id, u.nivel, count(a.id) as cantidadanimales
                        from cabs cab
                        inner join users u on cab.user = u.id
                        inner join cabs cabdemas on cabdemas.user = u.id
                        inner join animales a on cabdemas.id = a.cab
                        where cab.id ="${idcab}" and a.active
            `).one(result)
        return e.json(200,{
            result
        });
    }catch(err){
        $app.db()
            .newQuery(`select cab.id, u.nivel, 0 as cantidadanimales
                        from cabs cab
                        inner join users u on cab.user = u.id
                        where cab.id ="${idcab}" 
            `).one(result)
        return e.json(200,{
            result
        });
    }
    
})  