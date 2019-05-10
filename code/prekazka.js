class Prekazka extends GameObject {

    constructor(game, x, y) {
        super(game, x, y,"../obrazky/enemy_robot.png");
    }

    update(dt) {
        this.x -= Prekazka.speed * dt;
    }

    static speed = 0.6;
}