class GameObject {
    constructor(game, x, y, texture = null) {
      this.x = x;
      this.y = y;
      this.parent = null;
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
        child.parent = this;
    }

    removeChild(child) {
        this.children.splice(this.children.indexOf(child), 1);
        child.parent = null;
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

    static collision(actor1, actor2) {
        return actor1.x < actor2.x + actor2.img.width &&
        actor1.x + actor1.img.width > actor2.x &&
        actor1.y < actor2.y + actor2.img.height &&
        actor1.y + actor1.img.height > actor2.y
    }

    
}