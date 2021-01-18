const CFG_PKG = require("../config")
const CONFIG = CFG_PKG.userServer()

const SERVER_PKG = require("./userServer")
SERVER_PKG.run(CONFIG.PORT)
