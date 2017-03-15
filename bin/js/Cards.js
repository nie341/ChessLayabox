var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
* 牌;
*/
var Cards = (function (_super) {
    __extends(Cards, _super);
    function Cards() {
        return _super.call(this) || this;
    }
    Cards.prototype.setIndex = function (index, state) {
        this.index = index;
        if (index >= 0 && index <= 12) {
            this.stype = 1 /* Fangkuai */;
        }
        else if (index >= 13 && index <= 25) {
            this.stype = 2 /* Caohua */;
        }
        else if (index >= 26 && index <= 38) {
            this.stype = 3 /* Hongxin */;
        }
        else if (index >= 39 && index <= 51) {
            this.stype = 0 /* Heitao */;
        }
        if (index == 0 || index == 13 || index == 26 || index == 39) {
            this.value = 0 /* P2 */;
        }
        else if (index == 1 || index == 14 || index == 27 || index == 40) {
            this.value = 1 /* P3 */;
        }
        else if (index == 2 || index == 15 || index == 28 || index == 41) {
            this.value = 2 /* P4 */;
        }
        else if (index == 3 || index == 16 || index == 29 || index == 42) {
            this.value = 3 /* P5 */;
        }
        else if (index == 4 || index == 17 || index == 30 || index == 43) {
            this.value = 4 /* P6 */;
        }
        else if (index == 5 || index == 18 || index == 31 || index == 44) {
            this.value = 5 /* P7 */;
        }
        else if (index == 6 || index == 19 || index == 32 || index == 45) {
            this.value = 6 /* P8 */;
        }
        else if (index == 7 || index == 20 || index == 33 || index == 46) {
            this.value = 7 /* P9 */;
        }
        else if (index == 8 || index == 21 || index == 34 || index == 47) {
            this.value = 8 /* P10 */;
        }
        else if (index == 9 || index == 22 || index == 35 || index == 48) {
            this.value = 9 /* PJ */;
        }
        else if (index == 10 || index == 23 || index == 36 || index == 49) {
            this.value = 10 /* PQ */;
        }
        else if (index == 11 || index == 24 || index == 37 || index == 50) {
            this.value = 11 /* PK */;
        }
        else if (index == 12 || index == 25 || index == 38 || index == 51) {
            this.value = 12 /* PA */;
        }
        this.state = state;
        this.reloadCards();
    };
    Cards.prototype.setCardsState = function (state) {
        this.state = state;
        this.reloadCards();
    };
    Cards.prototype.reloadCards = function () {
        if (this.state == 0 /* Back */) {
            this.loadImage("cards/back.png");
        }
        else if (this.state == 1 /* Positive */) {
            this.loadImage("cards/" + this.index + ".png");
        }
    };
    Cards.prototype.startRotateAni = function () {
        this.cardsrotation = 0;
        this.rotationnum = 0;
        Laya.timer.loop(50, this, this.rotateAni);
    };
    Cards.prototype.rotateAni = function () {
        this.cardsrotation += 60;
        this.rotationnum += 1;
        // if(this.rotationnum > 10){
        //     this.endRotateAni();
        //     return;
        // }
        this.rotation = this.cardsrotation;
    };
    Cards.prototype.endRotateAni = function () {
        Laya.timer.clear(this, this.rotateAni);
    };
    return Cards;
}(Laya.Sprite));
//# sourceMappingURL=Cards.js.map