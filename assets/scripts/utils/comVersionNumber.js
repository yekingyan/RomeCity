cc.Class({
    extends: cc.Component,
    requestVersion() {
        cc.app.http.request("GET", "version").then(res => {
            if (res) {
                cc.app.version = res
                cc.log("version", cc.app.version)
            }
        })
    },

    start () {
        this.requestVersion()
    },

})
