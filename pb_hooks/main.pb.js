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
//Esto es peligroso pero por ahora va
//Que deberia traer?
//Animales (activos y muertos,lotes,rodeos,inseminaciones,srvicios,nacimientos,tratamientos,
//observaciones,pesajes, tactos  )
//Probablemente tenga quehacer un key value

routerAdd("GET","/api/creciente/fullcab/{idcab}",(e)=>{
    let idcab = e.request.pathValue("idcab")
    const resultAnimales = arrayOf(new DynamicModel({
        id:"",
        caravana:"",
        //fechatacto:"",
        //fechaser:"",
        //fechains:"",
        active:0,
        cab:""
    }))
    const resultObservaciones = arrayOf(new DynamicModel({
        id:"",
        animal:"",
        fecha:""
    }))
    const resultPesaje = arrayOf(new DynamicModel({
        id:"",
        animal:"",
        fecha:""
    }))
    const resultRodeos = arrayOf(new DynamicModel({
        id:"",
        nombre:""
    }))
    const resultLotes = arrayOf(new DynamicModel({
        id:"",
        nombre:""
    }))
    const resultServicios = arrayOf(new DynamicModel({
        id:"",
        fechadesde:"",
        madre:"",
        padres:""
    }))
    const resultInseminacion = arrayOf(new DynamicModel({
        id:"",
        fechainseminacion:"",
        animal:"",
        pajuela:""
    }))
    const resultTactos = arrayOf(new DynamicModel({
        id:"",
        animal:"",
        fecha:""
    }))
    const resultTratamientos = arrayOf(new DynamicModel({
        id:"",
        animal:"",
        fecha:""
    }))
    const resultNacimientos = arrayOf(new DynamicModel({
        id:"",
        madre:"",
        fecha:""     
    }))
    try {

        $app.db()
            .newQuery(`SELECT id, caravana,active,cab FROM Animales where cab='${idcab}' and active = True`)
            .all(resultAnimales) // throw an error on db failure
        // lotes
        $app.db()
            .newQuery(`SELECT id, nombre, active,cab FROM lotes where cab='${idcab}' and active = True`)
            .all(resultLotes) // throw an error on db failure
        // rodeos
        $app.db()
            .newQuery(`SELECT id, nombre, active,cab FROM rodeos where cab='${idcab}' and active = True`)
            .all(resultRodeos) // throw an error on db failure
        // observaciones
        $app.db()
            .newQuery(`SELECT id, animal, fecha, active,cab FROM observaciones where cab='${idcab}' and active = True`)
            .all(resultObservaciones) // throw an error on db failure
        // tratamientos
        $app.db()
            .newQuery(`SELECT id, animal, fecha, active,cab FROM tratamientos where cab='${idcab}' and active = True`)
            .all(resultTratamientos) // throw an error on db failure
        // tactos
        $app.db()
            .newQuery(`SELECT id, animal, fecha, active,cab FROM tactos where cab='${idcab}' and active = True` )
            .all(resultTactos) // throw an error on db failure
        // nacimientos
        $app.db()
            .newQuery(`SELECT id, madre, fecha FROM nacimientos where cab='${idcab}' `)
            .all(resultNacimientos) // throw an error on db failure
        // servicios
        $app.db()
            .newQuery(`SELECT id, fechadesde, madre, padres,active,cab FROM servicios where cab='${idcab}' and active = True`)
            .all(resultServicios) // throw an error on db failure
        // inseminaciones
        $app.db()
            .newQuery(`SELECT id, animal, fechainseminacion, pajuela,active,cab FROM inseminacion where cab='${idcab}' and active = True`)
            .all(resultInseminacion) // throw an error on db failure
        
        // pesajes
        //los pesajes no tiene cabaña porque pertenecen al animal
        $app.db()
            .newQuery(`
                SELECT p.id, p.animal, p.fecha,c.id as cab 
                    FROM pesaje p
                    inner join animales a on a.id = p.animal
                    inner join cabs c on a.cab = c.id
                    where c.id  ='${idcab}'
            `)
            .all(resultPesaje) // throw an error on db failure
        return e.json(200,{
            idcab,
            animales:resultAnimales,
            observaciones:resultObservaciones,
            lotes:resultLotes,
            rodeos:resultRodeos,
            nacimientos:resultNacimientos,
            pesajes:resultPesaje,
            servicios:resultServicios,
            inseminaciones:resultInseminacion,
            tactos:resultTactos,
            tratamientos:resultTratamientos,
            message:"Todo bien"
        });
    }
    catch(err){
        console.log(JSON.stringify(err))
        return e.json(500,{
            idcab:"",
            animales:[],
            observaciones:[],
            lotes:[],
            rodeos:[],
            nacimientos:[],
            pesajes:[],
            servicios:[],
            inseminaciones:[],
            tactos:[],
            tratamientos:[],
            message:JSON.stringify(err)
        });
    }
    
})