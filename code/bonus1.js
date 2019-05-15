class Bonus1 extends Bonus {

    constructor(game, x, y) {
        super(game, x, y, "../obrazky/immunity.png");
    }

    onHit() {
        this.game.hasImmunity = true;
        setInterval(() => {
            this.game.hasImmunity = false;
            this.game.circleIcon.style.display = "none";
        }, 7000);
        this.game.circleIcon.style.display = "block";
    }

}