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

        this.stage = new GameObject(this,0,0, null);

        this.bg = new Background();
        this.stage.addChild(this.bg);

        this.player = new Player(this, 100, 549);
        this.stage.addChild(this.player);

        this.prekazky = [];

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
            this.prekazky.push(prekazka);
        };

        this.running = false;

        document.addEventListener("click",() => {
            this.running = true;
            this.menu.style.display = "none";
            this.gameNode.style.display = "block";
            setInterval(this.handler, 2000);
        }, {once: true});

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

            for (let i of this.prekazky) {
                if (GameObject.collision(this.player, i)) {
                    this.running = false;
                    this.gameNode.style.display = "none";
                    this.gameOverNode.style.display = "block";
                    this.gameOverScoreNode.innerHTML = this.score;
                    clearInterval(this.handler);
                    document.addEventListener("click", () => {

                        this.start();
                        this.gameOverNode.style.display = "none";

                    }, {once:true});
                    this.start();
                }
            }

            this.score++;
            this.scoreNode.innerHTML = this.score;
            if (this.score % 100 === 0) {
                Prekazka.speed += 0.01;
                console.log(Prekazka.speed);
            }
            this.stage.update(dt);
            this.stage.draw(this.ctx);

        }

    }
}