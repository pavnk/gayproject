class Prekazka extends GameObject {

    constructor(game, x, y) {
        super(game, x, y,"../obrazky/enemy_robot.png");
    }

    update(dt) {
        if (GameObject.collision(this, this.game.player) && !this.game.hasImmunity) {

            if(this.game.hasLife) {
                this.game.hasLife = false;
                this.game.heartIcon.style.display = "none";
                this.parent.removeChild(this);
                return;
            }

            this.game.running = false;

            this.game.gameNode.style.display = "none";
            this.game.gameOverNode.style.display = "block";
            this.game.gameOverScoreNode.innerHTML = this.game.score;
            this.game.circleIcon.style.display = "none";
            this.game.heartIcon.style.display = "none";


            clearInterval(this.game.timerID);
            clearInterval(this.game.timerID1);
            clearInterval(this.game.timerID2);

            let audio = new Audio("../zvuky/koniec_hry.mp3");
            audio.play();

            document.addEventListener("click", () => {

                window.location = window.location;

                this.game.start();
                this.game.gameOverNode.style.display = "none";

            }, {once:true});
            this.game.start();
        }

        this.x -= Prekazka.speed * dt;
    }

    static speed = 0.6;
}