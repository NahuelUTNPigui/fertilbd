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

onRecordCreateRequest((e)=>{
    showBody(e)
    e.next()
},'users')


