// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const BUILDING_TO_PERFAB = {
    "default" : [
        "conscription",
        "detail",
        "upgrade",
    ],
    "barracks1" : [  // 兵营
        "conscription",
        "detail",
        "upgrade",
    ],
    "barracks2" : [  // 兵营
        "conscription",
        "detail",
        "upgrade",
    ],
    "train": [  // 训练场
        "conscription",
        "train",
        "upgrade",
    ]
}

const PREFABS_DIR_NAME = "fabs"

name2fabs = {}

cc.Class({
    extends: cc.Component,

    properties: {
        perfabBarrack: {  // 募兵
            default: null,
            type: cc.Prefab,
        },
        perfabDetail: {  // 详情
            default: null,
            type: cc.Prefab,
        },
        perfabUpgrade: {  // 升级
            default: null,
            type: cc.Prefab,
        },
        perfabTrain: {  // 训练
            default: null,
            type: cc.Prefab,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.node.children.forEach(element => {
            let newBtn = element.addComponent(cc.Button) 
            let eventHandler = new cc.Component.EventHandler()
            eventHandler.target = this.node
            eventHandler.component = "citybutton"
            eventHandler.handler = "onClickCity"
            newBtn.clickEvents = [eventHandler]
        })
    },

    start () {
    },

    // update (dt) {},

    onClickCity: function(event) {
        let target = event.target
        cc.log(111, event)
        if (target.childrenCount > 0) {
            target.children.forEach(element => {
                element.destroy()
            })
        } else {
            let btn
            let buildingName = target.name
            let perfabsName = BUILDING_TO_PERFAB[buildingName] ? BUILDING_TO_PERFAB[buildingName] : BUILDING_TO_PERFAB.default
            perfabsName.forEach((fabName, i) => {
                cc.loader.loadRes(`${PREFABS_DIR_NAME}/${fabName}`, (err, prefab) => {
                    btn = cc.instantiate(prefab)
                    target.addChild(btn)
                    btn.y = btn.y - i * 70
                })
            })
        }
    },
});
