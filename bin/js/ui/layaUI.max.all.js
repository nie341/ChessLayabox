var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var addchipUI = (function (_super) {
        __extends(addchipUI, _super);
        function addchipUI() {
            return _super.call(this) || this;
        }
        addchipUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.addchipUI.uiView);
        };
        return addchipUI;
    }(Dialog));
    addchipUI.uiView = { "type": "Dialog", "props": { "width": 768, "height": 200 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "skin": "game/smallbg.png", "sizeGrid": "5,5,5,5", "height": 200 } }, { "type": "Button", "props": { "y": 25, "x": 17, "width": 160, "var": "but01", "stateNum": "1", "skin": "game/chip01.png", "labelStrokeColor": "#000000", "labelSize": 38, "label": "300", "height": 160 } }, { "type": "Button", "props": { "y": 25, "x": 209, "width": 160, "var": "but02", "stateNum": "1", "skin": "game/chip02.png", "labelStrokeColor": "#000000", "labelSize": 38, "label": "500", "height": 160 } }, { "type": "Button", "props": { "y": 25, "x": 400, "width": 160, "var": "but03", "stateNum": "1", "skin": "game/chip03.png", "labelStrokeColor": "#000000", "labelSize": 38, "label": "800", "height": 160 } }, { "type": "Button", "props": { "y": 25, "x": 592, "width": 160, "var": "but04", "stateNum": "1", "skin": "game/chip04.png", "labelStrokeColor": "#000000", "labelSize": 38, "label": "1000", "height": 160 } }] };
    ui.addchipUI = addchipUI;
})(ui || (ui = {}));
(function (ui) {
    var chipUI = (function (_super) {
        __extends(chipUI, _super);
        function chipUI() {
            return _super.call(this) || this;
        }
        chipUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.chipUI.uiView);
        };
        return chipUI;
    }(View));
    chipUI.uiView = { "type": "View", "props": { "width": 52, "height": 58 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 52, "var": "bg", "skin": "chip/chip01.png", "height": 58 } }, { "type": "Label", "props": { "y": 21, "x": 3, "width": 44, "var": "money", "text": "200", "height": 12, "fontSize": 13, "align": "center" } }] };
    ui.chipUI = chipUI;
})(ui || (ui = {}));
(function (ui) {
    var chipbigUI = (function (_super) {
        __extends(chipbigUI, _super);
        function chipbigUI() {
            return _super.call(this) || this;
        }
        chipbigUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.chipbigUI.uiView);
        };
        return chipbigUI;
    }(View));
    chipbigUI.uiView = { "type": "View", "props": { "width": 84, "height": 40 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "skin": "chip/chip00.png" } }, { "type": "Label", "props": { "y": 5, "x": 14, "width": 56, "text": "1万", "height": 26, "fontSize": 26, "align": "center" } }] };
    ui.chipbigUI = chipbigUI;
})(ui || (ui = {}));
(function (ui) {
    var createroomUI = (function (_super) {
        __extends(createroomUI, _super);
        function createroomUI() {
            return _super.call(this) || this;
        }
        createroomUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.createroomUI.uiView);
        };
        return createroomUI;
    }(View));
    createroomUI.uiView = { "type": "View", "props": { "width": 768, "height": 1024 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "skin": "comp/bg.png", "sizeGrid": "20,4,4,4", "height": 1024 } }, { "type": "Button", "props": { "y": 248, "x": 239, "width": 212, "var": "create", "skin": "comp/button.png", "labelSize": 30, "label": "创建房间", "height": 63 } }] };
    ui.createroomUI = createroomUI;
})(ui || (ui = {}));
(function (ui) {
    var gameroomUI = (function (_super) {
        __extends(gameroomUI, _super);
        function gameroomUI() {
            return _super.call(this) || this;
        }
        gameroomUI.prototype.createChildren = function () {
            View.regComponent("ui.userUI", ui.userUI);
            View.regComponent("ui.ubutUI", ui.ubutUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.gameroomUI.uiView);
        };
        return gameroomUI;
    }(View));
    gameroomUI.uiView = { "type": "View", "props": { "width": 768, "height": 1024 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -1.5, "skin": "room_bg.png" } }, { "type": "user", "props": { "y": 236, "x": 86, "var": "userleft01", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 442, "x": 86, "var": "userleft02", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 236, "x": 588, "var": "userright01", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 442, "x": 588, "var": "userright02", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 732, "x": 334, "var": "usermy", "runtime": "ui.userUI" } }, { "type": "ubut", "props": { "y": 785, "x": 174, "var": "ubut01", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 654, "x": 207, "var": "ubut02", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 602, "x": 334, "var": "ubut03", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 654, "x": 459, "var": "ubut04", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 785, "x": 486, "var": "ubut05", "runtime": "ui.ubutUI" } }, { "type": "Image", "props": { "y": 2, "x": 305, "width": 146, "var": "npc", "skin": "game/npc.png", "height": 176 } }, { "type": "Image", "props": { "y": 235, "x": 331, "width": 106, "skin": "game/smallbg.png", "sizeGrid": "10,10,10,10", "height": 33 } }, { "type": "Image", "props": { "y": 232, "x": 314, "skin": "game/chipsmall.png" } }, { "type": "Label", "props": { "y": 241, "x": 354, "width": 70, "var": "chippool", "text": "label", "height": 23, "fontSize": 20, "color": "#ffface" } }, { "type": "Label", "props": { "y": 275, "x": 351, "width": 66, "var": "round", "text": "label", "height": 22, "fontSize": 20, "color": "#116941" } }, { "type": "Label", "props": { "y": 210, "x": 281, "width": 183, "var": "tips02", "text": "label", "height": 22, "fontSize": 20, "color": "#116941" } }, { "type": "Label", "props": { "y": 188, "x": 284, "width": 204, "var": "tips01", "text": "label", "height": 22, "fontSize": 20, "color": "#116941" } }, { "type": "Image", "props": { "y": 902, "x": 324, "var": "lookcards", "skin": "game/look.png" } }, { "type": "Image", "props": { "y": 236, "x": 86, "width": 100, "var": "umaskleft01", "skin": "game/mask.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 442, "x": 86, "width": 100, "var": "umaskleft02", "skin": "game/mask.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 236, "x": 588, "width": 100, "var": "umaskright01", "skin": "game/mask.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 440, "x": 588, "width": 100, "var": "umaskright02", "skin": "game/mask.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 732, "x": 334, "width": 100, "var": "umaskmy", "skin": "game/mask.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 340, "x": 205, "var": "uxianleft01", "skin": "game/xian.png" } }, { "type": "Image", "props": { "y": 555, "x": 200, "var": "uxianleft02", "skin": "game/xian.png" } }, { "type": "Image", "props": { "y": 340, "x": 540, "var": "uxianright01", "skin": "game/xian.png" } }, { "type": "Image", "props": { "y": 555, "x": 541, "var": "uxianright02", "skin": "game/xian.png" } }, { "type": "Image", "props": { "y": 846, "x": 454, "var": "uxianmy", "skin": "game/xian.png" } }, { "type": "Label", "props": { "y": 244, "x": 194, "width": 59, "var": "uqileft01", "text": "弃牌", "height": 28, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 244, "x": 514, "width": 59, "var": "uqiright01", "text": "弃牌", "height": 28, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 447, "x": 194, "width": 59, "var": "uqileft02", "text": "弃牌", "height": 28, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 447, "x": 514, "width": 59, "var": "uqiright02", "text": "弃牌", "height": 28, "fontSize": 24, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 740, "x": 447, "width": 59, "var": "uqimy", "text": "弃牌", "height": 28, "fontSize": 24, "color": "#ffffff" } }, { "type": "Image", "props": { "y": 236, "x": 508, "width": 180, "var": "uframer01", "skin": "game/userframe.png", "sizeGrid": "16,16,16,16", "height": 144 } }, { "type": "Image", "props": { "y": 440, "x": 508, "width": 180, "var": "uframer02", "skin": "game/userframe.png", "sizeGrid": "16,16,16,16", "height": 144 } }, { "type": "Image", "props": { "y": 442, "x": 86, "width": 180, "var": "uframel02", "skin": "game/userframe.png", "sizeGrid": "16,16,16,16", "height": 144 } }, { "type": "Image", "props": { "y": 236, "x": 86, "width": 180, "var": "uframel01", "skin": "game/userframe.png", "sizeGrid": "16,16,16,16", "height": 144 } }, { "type": "Label", "props": { "y": 28, "x": 32, "width": 141, "var": "roomid", "text": "roomid", "height": 26, "fontSize": 24, "color": "#116941" } }, { "type": "Button", "props": { "y": 17, "x": 684, "width": 62, "var": "back", "skin": "comp/btn_close.png", "height": 44 } }] };
    ui.gameroomUI = gameroomUI;
})(ui || (ui = {}));
(function (ui) {
    var gamoloadingUI = (function (_super) {
        __extends(gamoloadingUI, _super);
        function gamoloadingUI() {
            return _super.call(this) || this;
        }
        gamoloadingUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.gamoloadingUI.uiView);
        };
        return gamoloadingUI;
    }(View));
    gamoloadingUI.uiView = { "type": "View", "props": { "width": 768, "height": 1024 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "skin": "comp/bg.png", "sizeGrid": "26,5,5,5", "height": 1024 } }, { "type": "ProgressBar", "props": { "y": 505, "x": 77.99999999999993, "width": 611, "var": "pb", "value": 0, "skin": "comp/progress.png", "height": 14 } }] };
    ui.gamoloadingUI = gamoloadingUI;
})(ui || (ui = {}));
(function (ui) {
    var loginUI = (function (_super) {
        __extends(loginUI, _super);
        function loginUI() {
            return _super.call(this) || this;
        }
        loginUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.loginUI.uiView);
        };
        return loginUI;
    }(View));
    loginUI.uiView = { "type": "View", "props": { "width": 768, "height": 1024 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "skin": "comp/bg.png", "sizeGrid": "20,4,4,4", "height": 1024 } }, { "type": "Button", "props": { "y": 508, "x": 221, "width": 340, "var": "login", "skin": "comp/button.png", "labelSize": 30, "label": "登录", "height": 93 } }, { "type": "Box", "props": { "y": 247, "x": 86 }, "child": [{ "type": "TextInput", "props": { "y": 0, "x": 116, "width": 489, "var": "user", "skin": "comp/textinput.png", "height": 102, "fontSize": 30 } }, { "type": "Label", "props": { "y": 21, "x": 0, "width": 116, "text": "用户名", "overflow": "hidden", "height": 61, "fontSize": 30, "align": "center" } }] }, { "type": "Box", "props": { "y": 364, "x": 86 }, "child": [{ "type": "TextInput", "props": { "y": 0, "x": 116, "width": 489, "var": "room", "skin": "comp/textinput.png", "height": 102, "fontSize": 30 } }, { "type": "Label", "props": { "y": 21, "x": 0, "width": 116, "text": "房间号", "overflow": "hidden", "height": 61, "fontSize": 30, "align": "center" } }] }] };
    ui.loginUI = loginUI;
})(ui || (ui = {}));
(function (ui) {
    var pkUI = (function (_super) {
        __extends(pkUI, _super);
        function pkUI() {
            return _super.call(this) || this;
        }
        pkUI.prototype.createChildren = function () {
            View.regComponent("ui.userUI", ui.userUI);
            _super.prototype.createChildren.call(this);
            this.createView(ui.pkUI.uiView);
        };
        return pkUI;
    }(Dialog));
    pkUI.uiView = { "type": "Dialog", "props": { "width": 768, "height": 290 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 432, "skin": "game/pkl.png", "sizeGrid": "0,98,0,0", "height": 204 } }, { "type": "Image", "props": { "y": 86, "x": 302, "width": 466, "skin": "game/pkr.png", "sizeGrid": "0,0,0,98", "height": 204 } }, { "type": "Image", "props": { "y": 96, "x": 244, "skin": "game/p.png" } }, { "type": "Image", "props": { "y": 102, "x": 358, "skin": "game/k.png" } }, { "type": "user", "props": { "y": 46, "x": 72, "var": "user0", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 102, "x": 564, "var": "user1", "runtime": "ui.userUI" } }] };
    ui.pkUI = pkUI;
})(ui || (ui = {}));
(function (ui) {
    var selectlUI = (function (_super) {
        __extends(selectlUI, _super);
        function selectlUI() {
            return _super.call(this) || this;
        }
        selectlUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.selectlUI.uiView);
        };
        return selectlUI;
    }(View));
    selectlUI.uiView = { "type": "View", "props": { "width": 260, "height": 144 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 200, "skin": "game/select.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 53, "x": 206, "skin": "game/pkarrowl.png" } }] };
    ui.selectlUI = selectlUI;
})(ui || (ui = {}));
(function (ui) {
    var selectrUI = (function (_super) {
        __extends(selectrUI, _super);
        function selectrUI() {
            return _super.call(this) || this;
        }
        selectrUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.selectrUI.uiView);
        };
        return selectrUI;
    }(View));
    selectrUI.uiView = { "type": "View", "props": { "width": 260, "height": 144 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 60, "width": 200, "skin": "game/select.png", "sizeGrid": "10,10,10,10", "height": 144 } }, { "type": "Image", "props": { "y": 53, "x": 0, "skin": "game/pkarrowr.png" } }] };
    ui.selectrUI = selectrUI;
})(ui || (ui = {}));
(function (ui) {
    var ubutUI = (function (_super) {
        __extends(ubutUI, _super);
        function ubutUI() {
            return _super.call(this) || this;
        }
        ubutUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.ubutUI.uiView);
        };
        return ubutUI;
    }(View));
    ubutUI.uiView = { "type": "View", "props": { "width": 100, "height": 120 }, "child": [{ "type": "Image", "props": { "y": 5, "x": 6, "var": "but", "skin": "game/ubut02.png" } }, { "type": "Image", "props": { "y": 97, "x": 19, "width": 62, "skin": "game/smallbg.png", "sizeGrid": "5,5,5,5", "height": 20 } }, { "type": "Label", "props": { "y": 100, "x": 26.5, "width": 47, "var": "butname", "text": "label", "height": 16, "color": "#64c36f" } }, { "type": "Label", "props": { "y": 37, "x": 34, "var": "buttxt", "text": "label", "fontSize": 16, "color": "#ffffff" } }, { "type": "Image", "props": { "y": 26, "x": 36, "var": "butimg", "skin": "game/add.png" } }] };
    ui.ubutUI = ubutUI;
})(ui || (ui = {}));
(function (ui) {
    var userUI = (function (_super) {
        __extends(userUI, _super);
        function userUI() {
            return _super.call(this) || this;
        }
        userUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.userUI.uiView);
        };
        return userUI;
    }(View));
    userUI.uiView = { "type": "View", "props": { "width": 100, "height": 144 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "bg", "skin": "game/userbg.png" } }, { "type": "Image", "props": { "y": 24, "x": 5, "var": "head", "skin": "game/userheadbg.png" } }, { "type": "Label", "props": { "y": 9, "x": 9, "width": 82, "var": "uname", "text": "label", "height": 14, "fontSize": 14, "color": "#ffffff" } }, { "type": "Label", "props": { "y": 123, "x": 9, "width": 82, "var": "money", "text": "label", "height": 14, "fontSize": 14, "color": "#cfa654" } }] };
    ui.userUI = userUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map