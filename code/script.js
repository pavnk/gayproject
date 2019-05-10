let game;

window.onkeydown = (event) => {
    game.onkeydown(event);
};

window.onkeyup = (event) => {
    game.onkeyup(event);
};

let last_update = 0;
let update = (timestamp) => {
    let dt = timestamp - last_update;
    last_update = timestamp;
    game.update(dt);
    window.requestAnimationFrame(update);
};

window.onload = () => {
    game = new Hra("canvas");
    window.requestAnimationFrame(update);
};