class Stone {
    constructor(x, y, r) {
        var options = {
            restitution:0.5
        };
        this.r = r
        this.body = Bodies.circle(x, y, this.r, options);
        World.add(world, this.body);
      }
      display() {
        var pos = this.body.position;
        push();
        fill("gray");
       ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, this.r);
        pop();
      }
    }