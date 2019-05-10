class GameObject {
    constructor(game, x, y, texture = null) {
      this.x = x;
      this.y = y;
      this.game = game;
      if(texture === null) {
          this.img = null;
      } else {
          this.img = new Image();
          this.img.src = texture;
      }
      this.children = [];
    }

    addChild(child) {
        this.children.push(child);
    }

    removeChild(child) {

    }

    draw(ctx) {
        for(let i of this.children) {
            i.draw(ctx);
        }
        if(this.img != null)
            ctx.drawImage(this.img, this.x, this.y);
    }

    update(dt) {
        for(let i of this.children) {
            i.update(dt);
        }
    }

    
}