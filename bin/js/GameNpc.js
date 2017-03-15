/*
* 游戏npc;
*/
var GameNpc = (function () {
    function GameNpc(gameroom) {
        this.gameroom = gameroom;
        this.init();
    }
    //函数
    GameNpc.prototype.init = function () {
        this.maxround = 15;
        this.chippoolnum = 0;
        this.currentround = 0;
        this.currentchip = 300;
    };
    GameNpc.prototype.initdChip = function () {
        this.chipsarray = [];
        this.schipsarray = [];
        this.chippoolnum = 0;
        this.chippool.text = this.chippoolnum.toString();
    };
    //洗牌
    GameNpc.prototype.shuffleCards = function (cardsnum) {
        var pokerIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29,
            30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51];
        var k = 0;
        var temp = 0;
        for (var i = 0; i < pokerIndex.length; i++) {
            k = Math.floor(Math.random() * (pokerIndex.length - i));
            temp = pokerIndex[i];
            pokerIndex[i] = pokerIndex[k];
            pokerIndex[k] = temp;
        }
        this.cardsarray = [];
        for (var i = 0; i < cardsnum; i++) {
            this.cardsarray.push(pokerIndex[pokerIndex.length - 1]);
            pokerIndex.pop();
        }
        // console.log(this.cardsarray);
        this.chipsarray = [];
        this.schipsarray = [];
    };
    //发牌
    GameNpc.prototype.distributeCards = function (users) {
        for (var j = 0; j < users.length; j++) {
            var user = users[j];
            user.cardsnum = [];
            user.cards = [];
        }
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < users.length; j++) {
                var user = users[j];
                // console.log("sitdown:",user.sitdown);
                if (user.sitdown) {
                    user.cardsnum.push(this.cardsarray[this.cardsarray.length - 1]);
                    this.cardsarray.pop();
                }
            }
        }
        var timed = 0;
        for (var j = 0; j < 3; j++) {
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user.sitdown) {
                    // for(var j = 0 ; j < user.cardsnum.length ; j++){
                    var cardsuser;
                    if (i == 0) {
                        cardsuser = 0 /* Left01 */;
                    }
                    else if (i == 1) {
                        cardsuser = 1 /* Left02 */;
                    }
                    else if (i == 2) {
                        cardsuser = 2 /* My */;
                    }
                    else if (i == 3) {
                        cardsuser = 4 /* Right02 */;
                    }
                    else if (i == 4) {
                        cardsuser = 3 /* Right01 */;
                    }
                    var cards = new Cards();
                    cards.setIndex(user.cardsnum[j], 0 /* Back */);
                    // console.log("distributeCards:",cards.index);
                    cards.cardsuser = cardsuser;
                    cards.cardspos = j;
                    cards.x = Laya.stage.width / 2 - cards.width / 2;
                    cards.y = Laya.stage.height / 2 - cards.height / 2 - 100;
                    this.gameroom.addChild(cards);
                    user.cards.push(cards);
                    Laya.timer.once(100 + timed * 100, this, this.disCards);
                    Laya.Tween.to(cards, { x: user.cardspos[j][0], y: user.cardspos[j][1] }, 300, null, Laya.Handler.create(this, this.onCardsAni, [cards]), 100 + timed * 100);
                    timed += 1;
                }
            }
        }
    };
    GameNpc.prototype.disCards = function () {
        console.log("disCards");
        Laya.SoundManager.playSound("sound/fapai.mp3");
    };
    //设置回合
    GameNpc.prototype.setRound = function (round) {
        this.currentround = round;
        this.round.text = "第" + round + "/" + this.maxround + "轮";
    };
    GameNpc.prototype.setTips = function (tips1, tips2) {
        this.tips01.text = tips1;
        this.tips02.text = tips2;
    };
    //发牌动画结束
    GameNpc.prototype.onCardsAni = function (cards) {
        cards.tablepos = [cards.x, cards.y];
        if (cards.cardsuser == 2 /* My */) {
            cards.scale(1.2, 1.2);
            if (cards.cardspos == 2) {
                this.onLookCards();
            }
        }
    };
    GameNpc.prototype.onLookCards = function () {
        console.log("onLookCards");
        this.gameroom.showLookCards();
    };
    //添加筹码
    GameNpc.prototype.addChipPool = function (chip) {
        this.chipsarray.push(chip);
        this.chippoolnum += chip.moneynum;
        this.chippool.text = this.chippoolnum.toString();
    };
    /**
     * 添加血拼筹码
     */
    GameNpc.prototype.addShoppingChipPool = function (chip) {
        this.schipsarray.push(chip);
        this.chippoolnum += chip.moneynum;
        this.chippool.text = this.chippoolnum.toString();
    };
    //加注
    GameNpc.prototype.addChip = function (chip) {
        this.currentchip = chip;
    };
    //添加回合
    GameNpc.prototype.addRound = function () {
        this.currentround += 1;
        this.round.text = "第" + this.currentround + "/15轮";
    };
    //比牌
    GameNpc.prototype.loseOrWin = function (user0, user1) {
        user0.cardsType = this.getCardsResult(user0);
        user1.cardsType = this.getCardsResult(user1);
        if (user0.cardsType > user1.cardsType) {
            return 1 /* Win */;
        }
        else if (user0.cardsType < user1.cardsType) {
            return 0 /* Lose */;
        }
        else {
            var poker0Array = user0.cards;
            poker0Array.sort(this.cardsSort);
            var user0_poker0 = poker0Array[0];
            var user0_poker1 = poker0Array[1];
            var user0_poker2 = poker0Array[2];
            var poker1Array = user1.cards;
            poker1Array.sort(this.cardsSort);
            var user1_poker0 = poker1Array[0];
            var user1_poker1 = poker1Array[1];
            var user1_poker2 = poker1Array[2];
            if (user0_poker0.value > user1_poker0.value) {
                return 1 /* Win */;
            }
            else if (user0_poker0.value < user1_poker0.value) {
                return 0 /* Lose */;
            }
            else {
                if (user0_poker1.value > user1_poker1.value) {
                    return 1 /* Win */;
                }
                else if (user0_poker1.value < user1_poker1.value) {
                    return 0 /* Lose */;
                }
                else {
                    if (user0_poker2.value > user1_poker2.value) {
                        return 1 /* Win */;
                    }
                    else if (user0_poker2.value < user1_poker2.value) {
                        return 0 /* Lose */;
                    }
                    else {
                        return 2 /* Equality */;
                    }
                }
            }
        }
    };
    //获得用户的牌
    GameNpc.prototype.getCardsResult = function (user) {
        var pokerArray = [];
        for (var i = 0; i < user.cards.length; i++) {
            var cards = new Cards();
            cards.value = user.cards[i].value;
            cards.stype = user.cards[i].stype;
            pokerArray.push(pokerArray);
        }
        pokerArray.sort(this.cardsSort);
        var poker0 = pokerArray[0];
        var poker1 = pokerArray[1];
        var poker2 = pokerArray[2];
        // console.log(poker0.pnum);
        // console.log(poker1.pnum);
        // console.log(poker2.pnum);
        //豹子
        if (poker0.pnum == poker1.pnum
            && poker0.pnum == poker2.pnum
            && poker1.pnum == poker2.pnum) {
            user.cardsType = 5 /* Baozi */;
        }
        else if (poker0.pstyle == poker1.pstyle
            && poker0.pstyle == poker2.pstyle
            && poker1.pstyle == poker2.pstyle
            && poker0.pnum == poker1.pnum - 1
            && poker0.pnum == poker2.pnum - 2
            && poker1.pnum == poker2.pnum - 1) {
            user.cardsType = 4 /* Shunjin */;
        }
        else if (poker0.pstyle == poker1.pstyle
            && poker0.pstyle == poker2.pstyle
            && poker1.pstyle == poker2.pstyle) {
            user.cardsType = 3 /* Jinhua */;
        }
        else if (poker0.pnum == poker1.pnum - 1
            && poker0.pnum == poker2.pnum - 2
            && poker1.pnum == poker2.pnum - 1) {
            user.cardsType = 2 /* Shunzi */;
        }
        else if (poker0.pnum == poker1.pnum
            || poker0.pnum == poker2.pnum
            || poker1.pnum == poker2.pnum) {
            user.cardsType = 1 /* Duizi */;
        }
        else {
            user.cardsType = 0 /* Danzhang */;
        }
        console.log("pokerType:", user.cardsType);
        return user.cardsType;
    };
    GameNpc.prototype.cardsSort = function (a, b) {
        return a.value - b.value;
    };
    GameNpc.prototype.getPokerType = function (type) {
        if (type == 5 /* Baozi */) {
            return "豹子";
        }
        else if (type == 4 /* Shunjin */) {
            return "顺金";
        }
        else if (type == 3 /* Jinhua */) {
            return "金花";
        }
        else if (type == 2 /* Shunzi */) {
            return "顺子";
        }
        else if (type == 1 /* Duizi */) {
            return "对子";
        }
        else {
            return "单张";
        }
    };
    /**
     * 回收筹码
     */
    GameNpc.prototype.recoveryChip = function () {
        var user = this.gameroom.winUser();
        var tox = user.user.x + user.user.width / 2;
        var toy = user.user.y + user.user.height / 2;
        for (var i = 0; i < this.chipsarray.length; i++) {
            var chip = this.chipsarray[i];
            Laya.Tween.to(chip, { x: tox, y: toy }, 500, null, Laya.Handler.create(this, this.onRecoveryChipAni, [chip]));
            Laya.SoundManager.playSound("sound/chip.mp3");
        }
        this.chipsarray = [];
        for (var i = 0; i < this.schipsarray.length; i++) {
            var schip = this.schipsarray[i];
            Laya.Tween.to(schip, { x: tox, y: toy }, 500, null, Laya.Handler.create(this, this.onRecoveryChipAni, [schip]));
            Laya.SoundManager.playSound("sound/chip.mp3");
        }
        this.schipsarray = [];
        user.addMoney(this.chippoolnum);
        this.initdChip();
        this.setRound(0);
    };
    GameNpc.prototype.onRecoveryChipAni = function (chip) {
        chip.removeSelf();
        chip.destroy();
    };
    return GameNpc;
}());
//# sourceMappingURL=GameNpc.js.map