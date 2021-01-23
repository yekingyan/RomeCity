const CONFIG = require("../config").userServer()


// 响应
function response(res, ret) {
    let str = JSON.stringify(ret)
    res.send(str)
}


function version(req, res) {
    console.log("version", CONFIG.VERSION)
    response(res, CONFIG.VERSION)
}


exports.ROUTER = {
    "/version": version,
}