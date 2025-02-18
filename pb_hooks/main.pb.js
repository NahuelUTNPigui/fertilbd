//http://127.0.0.1:9991/
routerAdd("GET", "/hello/{name}", (e) => {
    console.log("x")
    let name = e.request.pathValue("name")
    
    return e.json(200, { "message": "Hello " + name })
})


