class Player extends GameObject {
    constructor(game, x, y) {
        super(game, x,y,"../obrazky/enemy_drone.png");
        this.vy = 0;
    }

    update(dt) {

        if(this.game.keys["ArrowUp"]) {
            if(this.y < 100)
                this.vy = 0;
            else
                this.vy = -1;
        }
        else if(this.game.keys["ArrowDown"]) {
            if(this.y > 550)
                this.vy = 0;
            else
                this.vy = 1;        }
        else {
            if(this.y > 299) {
                this.vy = -1;
            } else if (this.y < 280) {
                this.vy = 1;
            } else {
                this.vy = 0;
            }
        }

        this.y += this.vy * dt;
    }

}