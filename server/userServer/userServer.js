const EXPRESS = require("express")
const ROUTER = require("./route").ROUTER


let app = EXPRESS()


exports.run = (port) => {
    app.listen(port)
    console.log("server port:", port)
}


// 响应
function response(res, ret) {
    let str = JSON.stringify(ret)
    res.send(str)
}

// 跨域
app.all("*", (req, res, next) => {
    res.header("")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})



// 路由
for (i in ROUTER) {
    func = ROUTER[i]
    console.log(i, func)
    app.get(i, func)
}
