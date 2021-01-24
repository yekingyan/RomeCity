const CONFIG = require("../config").getConfig()

const DB = require("../utils/db")
DB.init(CONFIG)

const SERVER_PKG = require("./userServer")
SERVER_PKG.run(CONFIG.PORT)
