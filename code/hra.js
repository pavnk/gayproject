class Hra {
    constructor(canvasName) {
        this.canvas = document.getElementById(canvasName);
        this.ctx = this.canvas.getContext("2d");
        this.keys = [];

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

        this.running = true;

        this.handler();

        setInterval(this.handler, 2000)
    }

    onkeydown(event) {
        this.keys[event.key] = true;
    }
    onkeyup(event) {
        this.keys[event.key] = false;
    }
    update(dt){

        if(!this.running) {
            return;
        }

        for(let i of this.prekazky) {
            if (GameObject.collision(this.player, i)) {
                console.log("game over");
                this.running = false;
            }
        }

        this.score++;
        if(this.score % 100 === 0) {
            Prekazka.speed += 0.01;
            console.log(Prekazka.speed);
        }
        this.stage.update(dt);
        this.stage.draw(this.ctx);
    }
}