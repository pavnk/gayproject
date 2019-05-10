class Player extends GameObject {
    constructor(game, x, y) {
        super(game, x,y,"../obrazky/enemy_drone.png");
        this.jumping = false;
        this.dir = 1;
        this.vx = 5;
        this.vy = 0;
    }

    update(dt) {

        console.log(dt);

        if(this.game.keys["ArrowUp"] && !this.jumping) {
            this.jumping = true;
            this.dir = -1;
        }

        if(this.jumping) {
            this.vy = 1 * this.dir * dt;
        }

        if(this.y > 550) {
            this.dir = -1;
            this.jumping = false;
            this.vy = 0;
            this.y = 550;
        } else if (this.y < 100){
            this.dir = 1;
        }

        this.y += this.vy;
    }
}