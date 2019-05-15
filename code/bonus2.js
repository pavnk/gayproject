class Bonus2 extends Bonus {

    constructor(game, x, y) {
        super(game, x, y, "../obrazky/srdce.png");
    }

    onHit() {
        this.game.hasLife = true;
        this.game.heartIcon.style.display = "block";
    }

}