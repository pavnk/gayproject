class Hra {
    constructor(canvasName) {
        this.canvas = document.getElementById(canvasName);
        this.ctx = this.canvas.getContext("2d");
        this.keys = [];

        this.start();
    }

    start() {

        this.menu = document.getElementById("main-menu");
        this.gameNode = document.getElementById("game");
        this.scoreNode = document.getElementById("score");
        this.gameOverNode = document.getElementById("game-over");
        this.gameOverScoreNode = document.getElementById("game-over-score");
        this.heartIcon = document.getElementById("heart");
        this.circleIcon = document.getElementById("immunity");

        this.stage = new GameObject(this,0,0, null);

        this.bg = new Background();
        this.stage.addChild(this.bg);

        this.player = new Player(this, 100, 299);
        this.stage.addChild(this.player);

        this.vyska = 0;

        this.score = 0;

        this.handler = () => {
            if(Math.random() > 0.5) {
                this.vyska = 449 ;
            } else {
                this.vyska = 149;
            }
            let prekazka = new Prekazka(this, 1500, this.vyska);
            this.stage.addChild(prekazka);
        };

        this.bonusHandler1 = () => {
           if(Math.random() > 0.5 && !this.hasImmunity) {
               let bonus = new Bonus1(this, 1500, 299);
               this.stage.addChild(bonus);
           }
        };

        this.bonusHandler2 = () => {
            if(Math.random() > 0.25 && !this.hasImmunity) {
                let bonus = new Bonus2(this, 1500, 299);
                this.stage.addChild(bonus);
            }
        };

        let bonus = new Bonus1(this, 1500, 299);
        this.stage.addChild(bonus);

        this.running = false;

        this.hasImmunity = false;
        this.hasLife = false;


        clearInterval(this.timerID);
        clearInterval(this.timerID1);
        clearInterval(this.timerID2);

        this.timerID = null;
        this.timerID1 = null;
        this.timerID2 = null;

        this.listenerStart = () => {
                this.running = true;
                this.menu.style.display = "none";
                this.gameNode.style.display = "block";
                this.timerID = setInterval(this.handler, 2000);
                this.timerID1 = setInterval(this.bonusHandler1, 10000);
                this.timerID2 = setInterval(this.bonusHandler2, 1000);
        };

        document.addEventListener("keypress",(e) => {
            if (e.key === "Enter") {
                this.listenerStart();
                document.removeEventListener("keypress", this.listenerStart);
            }
        });

        let music = new Audio("../zvuky/hudba_v_pozadi.mp3");
        music.loop = true;

        let soundBtn = document.getElementById("zvuk");

        soundBtn.addEventListener("click", () => {
            if(music.paused) {
                soundBtn.src = "../obrazky/ikona_zvuku.png";
                music.play();
            } else {
                soundBtn.src = "../obrazky/ikona_zvuku_dis.png";
                music.pause();
            }
        });

        this.handler();
    }

    onkeydown(event) {
        this.keys[event.key] = true;
    }
    onkeyup(event) {
        this.keys[event.key] = false;
    }
    update(dt){

        if(this.running) {

            this.score++;
            this.scoreNode.innerHTML = this.score;
            if (this.score % 100 === 0) {
                Prekazka.speed += 0.01;
            }

            this.stage.update(dt);
            this.stage.draw(this.ctx);

        }

    }
}