var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
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
    gameroomUI.uiView = { "type": "View", "props": { "width": 768, "height": 1024 }, "child": [{ "type": "Image", "props": { "y": 0, "x": -1.5, "skin": "room_bg.png" } }, { "type": "user", "props": { "y": 236, "x": 86, "var": "userleft01", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 442, "x": 86, "var": "userleft02", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 236, "x": 588, "var": "userright01", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 442, "x": 588, "var": "userright02", "runtime": "ui.userUI" } }, { "type": "user", "props": { "y": 732, "x": 334, "var": "usermy", "runtime": "ui.userUI" } }, { "type": "ubut", "props": { "y": 781, "x": 189, "var": "ubut01", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 653, "x": 207, "var": "ubut02", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 607, "x": 334, "var": "ubut03", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 653, "x": 464, "var": "ubut04", "runtime": "ui.ubutUI" } }, { "type": "ubut", "props": { "y": 781, "x": 500, "var": "ubut05", "runtime": "ui.ubutUI" } }, { "type": "Image", "props": { "y": 2, "x": 305, "width": 146, "var": "npc", "skin": "game/npc.png", "height": 176 } }, { "type": "Image", "props": { "y": 235, "x": 331, "width": 106, "skin": "game/smallbg.png", "sizeGrid": "10,10,10,10", "height": 33 } }, { "type": "Image", "props": { "y": 232, "x": 314, "skin": "game/chipsmall.png" } }, { "type": "Label", "props": { "y": 241, "x": 354, "width": 70, "var": "chippool", "text": "label", "height": 23, "fontSize": 20, "color": "#ffface" } }, { "type": "Label", "props": { "y": 275, "x": 351, "width": 66, "var": "round", "text": "label", "height": 22, "fontSize": 20, "color": "#116941" } }, { "type": "Label", "props": { "y": 210, "x": 281, "width": 183, "var": "tips02", "text": "label", "height": 22, "fontSize": 20, "color": "#116941" } }, { "type": "Label", "props": { "y": 188, "x": 284, "width": 204, "var": "tips01", "text": "label", "height": 22, "fontSize": 20, "color": "#116941" } }] };
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