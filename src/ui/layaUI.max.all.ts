
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class addchipUI extends Dialog {
		public but01:Laya.Button;
		public but02:Laya.Button;
		public but03:Laya.Button;
		public but04:Laya.Button;

        public static  uiView:any ={"type":"Dialog","props":{"width":768,"height":200},"child":[{"type":"Image","props":{"y":0,"x":0,"width":768,"skin":"game/smallbg.png","sizeGrid":"5,5,5,5","height":200}},{"type":"Button","props":{"y":25,"x":17,"width":160,"var":"but01","stateNum":"1","skin":"game/chip01.png","labelStrokeColor":"#000000","labelSize":38,"label":"300","height":160}},{"type":"Button","props":{"y":25,"x":209,"width":160,"var":"but02","stateNum":"1","skin":"game/chip02.png","labelStrokeColor":"#000000","labelSize":38,"label":"500","height":160}},{"type":"Button","props":{"y":25,"x":400,"width":160,"var":"but03","stateNum":"1","skin":"game/chip03.png","labelStrokeColor":"#000000","labelSize":38,"label":"800","height":160}},{"type":"Button","props":{"y":25,"x":592,"width":160,"var":"but04","stateNum":"1","skin":"game/chip04.png","labelStrokeColor":"#000000","labelSize":38,"label":"1000","height":160}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.addchipUI.uiView);
        }
    }
}

module ui {
    export class chipUI extends View {
		public bg:Laya.Image;
		public money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":52,"height":58},"child":[{"type":"Image","props":{"y":0,"x":0,"width":52,"var":"bg","skin":"chip/chip01.png","height":58}},{"type":"Label","props":{"y":21,"x":3,"width":44,"var":"money","text":"200","height":12,"fontSize":13,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chipUI.uiView);
        }
    }
}

module ui {
    export class chipbigUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":84,"height":40},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"chip/chip00.png"}},{"type":"Label","props":{"y":5,"x":14,"width":56,"text":"1万","height":26,"fontSize":26,"align":"center"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.chipbigUI.uiView);
        }
    }
}

module ui {
    export class createroomUI extends View {
		public create:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":768,"height":1024},"child":[{"type":"Image","props":{"y":0,"x":0,"width":768,"skin":"comp/bg.png","sizeGrid":"20,4,4,4","height":1024}},{"type":"Button","props":{"y":248,"x":239,"width":212,"var":"create","skin":"comp/button.png","labelSize":30,"label":"创建房间","height":63}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.createroomUI.uiView);
        }
    }
}

module ui {
    export class gameroomUI extends View {
		public userleft01:ui.userUI;
		public userleft02:ui.userUI;
		public userright01:ui.userUI;
		public userright02:ui.userUI;
		public usermy:ui.userUI;
		public ubut01:ui.ubutUI;
		public ubut02:ui.ubutUI;
		public ubut03:ui.ubutUI;
		public ubut04:ui.ubutUI;
		public ubut05:ui.ubutUI;
		public npc:Laya.Image;
		public chippool:Laya.Label;
		public round:Laya.Label;
		public tips02:Laya.Label;
		public tips01:Laya.Label;
		public lookcards:Laya.Image;
		public umaskleft01:Laya.Image;
		public umaskleft02:Laya.Image;
		public umaskright01:Laya.Image;
		public umaskright02:Laya.Image;
		public umaskmy:Laya.Image;
		public uxianleft01:Laya.Image;
		public uxianleft02:Laya.Image;
		public uxianright01:Laya.Image;
		public uxianright02:Laya.Image;
		public uxianmy:Laya.Image;
		public uqileft01:Laya.Label;
		public uqiright01:Laya.Label;
		public uqileft02:Laya.Label;
		public uqiright02:Laya.Label;
		public uqimy:Laya.Label;
		public uframer01:Laya.Image;
		public uframer02:Laya.Image;
		public uframel02:Laya.Image;
		public uframel01:Laya.Image;
		public roomid:Laya.Label;
		public back:Laya.Button;

        public static  uiView:any ={"type":"View","props":{"width":768,"height":1024},"child":[{"type":"Image","props":{"y":0,"x":-1.5,"skin":"room_bg.png"}},{"type":"user","props":{"y":236,"x":86,"var":"userleft01","runtime":"ui.userUI"}},{"type":"user","props":{"y":442,"x":86,"var":"userleft02","runtime":"ui.userUI"}},{"type":"user","props":{"y":236,"x":588,"var":"userright01","runtime":"ui.userUI"}},{"type":"user","props":{"y":442,"x":588,"var":"userright02","runtime":"ui.userUI"}},{"type":"user","props":{"y":732,"x":334,"var":"usermy","runtime":"ui.userUI"}},{"type":"ubut","props":{"y":785,"x":174,"var":"ubut01","runtime":"ui.ubutUI"}},{"type":"ubut","props":{"y":654,"x":207,"var":"ubut02","runtime":"ui.ubutUI"}},{"type":"ubut","props":{"y":602,"x":334,"var":"ubut03","runtime":"ui.ubutUI"}},{"type":"ubut","props":{"y":654,"x":459,"var":"ubut04","runtime":"ui.ubutUI"}},{"type":"ubut","props":{"y":785,"x":486,"var":"ubut05","runtime":"ui.ubutUI"}},{"type":"Image","props":{"y":2,"x":305,"width":146,"var":"npc","skin":"game/npc.png","height":176}},{"type":"Image","props":{"y":235,"x":331,"width":106,"skin":"game/smallbg.png","sizeGrid":"10,10,10,10","height":33}},{"type":"Image","props":{"y":232,"x":314,"skin":"game/chipsmall.png"}},{"type":"Label","props":{"y":241,"x":354,"width":70,"var":"chippool","text":"label","height":23,"fontSize":20,"color":"#ffface"}},{"type":"Label","props":{"y":275,"x":351,"width":66,"var":"round","text":"label","height":22,"fontSize":20,"color":"#116941"}},{"type":"Label","props":{"y":210,"x":281,"width":183,"var":"tips02","text":"label","height":22,"fontSize":20,"color":"#116941"}},{"type":"Label","props":{"y":188,"x":284,"width":204,"var":"tips01","text":"label","height":22,"fontSize":20,"color":"#116941"}},{"type":"Image","props":{"y":902,"x":324,"var":"lookcards","skin":"game/look.png"}},{"type":"Image","props":{"y":236,"x":86,"width":100,"var":"umaskleft01","skin":"game/mask.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":442,"x":86,"width":100,"var":"umaskleft02","skin":"game/mask.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":236,"x":588,"width":100,"var":"umaskright01","skin":"game/mask.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":440,"x":588,"width":100,"var":"umaskright02","skin":"game/mask.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":732,"x":334,"width":100,"var":"umaskmy","skin":"game/mask.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":340,"x":205,"var":"uxianleft01","skin":"game/xian.png"}},{"type":"Image","props":{"y":555,"x":200,"var":"uxianleft02","skin":"game/xian.png"}},{"type":"Image","props":{"y":340,"x":540,"var":"uxianright01","skin":"game/xian.png"}},{"type":"Image","props":{"y":555,"x":541,"var":"uxianright02","skin":"game/xian.png"}},{"type":"Image","props":{"y":846,"x":454,"var":"uxianmy","skin":"game/xian.png"}},{"type":"Label","props":{"y":244,"x":194,"width":59,"var":"uqileft01","text":"弃牌","height":28,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":244,"x":514,"width":59,"var":"uqiright01","text":"弃牌","height":28,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":447,"x":194,"width":59,"var":"uqileft02","text":"弃牌","height":28,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":447,"x":514,"width":59,"var":"uqiright02","text":"弃牌","height":28,"fontSize":24,"color":"#ffffff"}},{"type":"Label","props":{"y":740,"x":447,"width":59,"var":"uqimy","text":"弃牌","height":28,"fontSize":24,"color":"#ffffff"}},{"type":"Image","props":{"y":236,"x":508,"width":180,"var":"uframer01","skin":"game/userframe.png","sizeGrid":"16,16,16,16","height":144}},{"type":"Image","props":{"y":440,"x":508,"width":180,"var":"uframer02","skin":"game/userframe.png","sizeGrid":"16,16,16,16","height":144}},{"type":"Image","props":{"y":442,"x":86,"width":180,"var":"uframel02","skin":"game/userframe.png","sizeGrid":"16,16,16,16","height":144}},{"type":"Image","props":{"y":236,"x":86,"width":180,"var":"uframel01","skin":"game/userframe.png","sizeGrid":"16,16,16,16","height":144}},{"type":"Label","props":{"y":28,"x":32,"width":141,"var":"roomid","text":"roomid","height":26,"fontSize":24,"color":"#116941"}},{"type":"Button","props":{"y":17,"x":684,"width":62,"var":"back","skin":"comp/btn_close.png","height":44}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.userUI",ui.userUI);
			View.regComponent("ui.ubutUI",ui.ubutUI);

            super.createChildren();
            this.createView(ui.gameroomUI.uiView);
        }
    }
}

module ui {
    export class gamoloadingUI extends View {
		public pb:Laya.ProgressBar;

        public static  uiView:any ={"type":"View","props":{"width":768,"height":1024},"child":[{"type":"Image","props":{"y":0,"x":0,"width":768,"skin":"comp/bg.png","sizeGrid":"26,5,5,5","height":1024}},{"type":"ProgressBar","props":{"y":505,"x":77.99999999999993,"width":611,"var":"pb","value":0,"skin":"comp/progress.png","height":14}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.gamoloadingUI.uiView);
        }
    }
}

module ui {
    export class loginUI extends View {
		public login:Laya.Button;
		public user:Laya.TextInput;
		public room:Laya.TextInput;

        public static  uiView:any ={"type":"View","props":{"width":768,"height":1024},"child":[{"type":"Image","props":{"y":0,"x":0,"width":768,"skin":"comp/bg.png","sizeGrid":"20,4,4,4","height":1024}},{"type":"Button","props":{"y":508,"x":221,"width":340,"var":"login","skin":"comp/button.png","labelSize":30,"label":"登录","height":93}},{"type":"Box","props":{"y":247,"x":86},"child":[{"type":"TextInput","props":{"y":0,"x":116,"width":489,"var":"user","skin":"comp/textinput.png","height":102,"fontSize":30}},{"type":"Label","props":{"y":21,"x":0,"width":116,"text":"用户名","overflow":"hidden","height":61,"fontSize":30,"align":"center"}}]},{"type":"Box","props":{"y":364,"x":86},"child":[{"type":"TextInput","props":{"y":0,"x":116,"width":489,"var":"room","skin":"comp/textinput.png","height":102,"fontSize":30}},{"type":"Label","props":{"y":21,"x":0,"width":116,"text":"房间号","overflow":"hidden","height":61,"fontSize":30,"align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.loginUI.uiView);
        }
    }
}

module ui {
    export class pkUI extends Dialog {
		public user0:ui.userUI;
		public user1:ui.userUI;

        public static  uiView:any ={"type":"Dialog","props":{"width":768,"height":290},"child":[{"type":"Image","props":{"y":0,"x":0,"width":432,"skin":"game/pkl.png","sizeGrid":"0,98,0,0","height":204}},{"type":"Image","props":{"y":86,"x":302,"width":466,"skin":"game/pkr.png","sizeGrid":"0,0,0,98","height":204}},{"type":"Image","props":{"y":96,"x":244,"skin":"game/p.png"}},{"type":"Image","props":{"y":102,"x":358,"skin":"game/k.png"}},{"type":"user","props":{"y":46,"x":72,"var":"user0","runtime":"ui.userUI"}},{"type":"user","props":{"y":102,"x":564,"var":"user1","runtime":"ui.userUI"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("ui.userUI",ui.userUI);

            super.createChildren();
            this.createView(ui.pkUI.uiView);
        }
    }
}

module ui {
    export class selectlUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":260,"height":144},"child":[{"type":"Image","props":{"y":0,"x":0,"width":200,"skin":"game/select.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":53,"x":206,"skin":"game/pkarrowl.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.selectlUI.uiView);
        }
    }
}

module ui {
    export class selectrUI extends View {

        public static  uiView:any ={"type":"View","props":{"width":260,"height":144},"child":[{"type":"Image","props":{"y":0,"x":60,"width":200,"skin":"game/select.png","sizeGrid":"10,10,10,10","height":144}},{"type":"Image","props":{"y":53,"x":0,"skin":"game/pkarrowr.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.selectrUI.uiView);
        }
    }
}

module ui {
    export class ubutUI extends View {
		public but:Laya.Image;
		public butname:Laya.Label;
		public buttxt:Laya.Label;
		public butimg:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":120},"child":[{"type":"Image","props":{"y":5,"x":6,"var":"but","skin":"game/ubut02.png"}},{"type":"Image","props":{"y":97,"x":19,"width":62,"skin":"game/smallbg.png","sizeGrid":"5,5,5,5","height":20}},{"type":"Label","props":{"y":100,"x":26.5,"width":47,"var":"butname","text":"label","height":16,"color":"#64c36f"}},{"type":"Label","props":{"y":37,"x":34,"var":"buttxt","text":"label","fontSize":16,"color":"#ffffff"}},{"type":"Image","props":{"y":26,"x":36,"var":"butimg","skin":"game/add.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.ubutUI.uiView);
        }
    }
}

module ui {
    export class userUI extends View {
		public bg:Laya.Image;
		public head:Laya.Image;
		public uname:Laya.Label;
		public money:Laya.Label;

        public static  uiView:any ={"type":"View","props":{"width":100,"height":144},"child":[{"type":"Image","props":{"y":0,"x":0,"var":"bg","skin":"game/userbg.png"}},{"type":"Image","props":{"y":24,"x":5,"var":"head","skin":"game/userheadbg.png"}},{"type":"Label","props":{"y":9,"x":9,"width":82,"var":"uname","text":"label","height":14,"fontSize":14,"color":"#ffffff"}},{"type":"Label","props":{"y":123,"x":9,"width":82,"var":"money","text":"label","height":14,"fontSize":14,"color":"#cfa654"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.userUI.uiView);
        }
    }
}
