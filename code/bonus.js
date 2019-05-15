class Bonus extends GameObject {

    constructor(game, x, y, img) {
        super(game, x, y, img);
    }

    update(dt) {
        if (GameObject.collision(this, this.game.player)) {
            this.onHit();
            this.parent.removeChild(this);
        }

        super.update(dt);

        this.x -= Prekazka.speed * dt;
    }

    onHit() {}

}