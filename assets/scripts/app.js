const http = require("./utils/HTTP").HTTP()

function initApp() {
    cc.app = {
        http: http,
        version: null,
    }
}

cc.Class({
    extends: cc.Component,
    onLoad () {
        initApp()
    },

});
