// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html


cc.Class({
    extends: cc.Component,

    properties: {
        speed: 1,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.move, this)
    },

    start () {
    },

    getMoveMaxOffset() {
        let width = this.node.width
        let height = this.node.height
        let canvasWidth = this.node.parent.width
        let canvasHeight = this.node.parent.height
        let offsetX = (width - canvasWidth) / 2
        let offsetY = (height - canvasHeight) / 2
        return [offsetX, offsetY]
    },

    fixMove() {
        let [offsetX, offsetY] = this.getMoveMaxOffset()
        this.node.x > offsetX ? this.node.x = offsetX  : null
        this.node.x < -offsetX ? this.node.x = -offsetX : null
        this.node.y > offsetY ? this.node.y = offsetY : null
        this.node.y < -offsetY ? this.node.y = -offsetY : null
    },

    move (event) {
        // 移动
        let lx = event.getDeltaX() * this.speed
        let ly = event.getDeltaY() * this.speed
        this.node.x += lx
        this.node.y += ly
        // 去黑边
        this.fixMove()
    },
});
