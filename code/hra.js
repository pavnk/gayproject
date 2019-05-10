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
    }
    onkeydown(event) {
        this.keys[event.key] = true;
    }
    onkeyup(event) {
        this.keys[event.key] = false;
    }
    update(dt){
        this.stage.update(dt);
        this.stage.draw(this.ctx);
    }
}