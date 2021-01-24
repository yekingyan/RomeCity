const CONFIG = require("../config").getConfig()
const DB = require("../utils/db")

// 响应
function response(res, ret) {
    let str = JSON.stringify(ret)
    res.send(str)
}


function version(req, res) {
    console.log("version", CONFIG.VERSION)
    response(res, CONFIG.VERSION)
}

function getUser(req, res) {
    console.log("getUser")
    DB.getNameByUserId(1)
        .then(name => response(res, name))
        .catch(err => response(res, err))
}

exports.ROUTER = {
    "/version": version,
    "/user": getUser,
}
