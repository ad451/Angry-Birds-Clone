class SlingShot {
    constructor(x, y, body) {
      const options = {
        pointA: {
          x: x,
          y: y
        },
        bodyB: body,
        stiffness: 0.03,
        length:16
      }
      this.sling = Matter.Constraint.create(options);
      World.add(world, this.sling);
    }
  
    fire() {
  
      this.sling.bodyB = null;
    }
  
    show() {
      if (this.sling.bodyB) {
        stroke(0);
        strokeWeight(1);
        const posA = this.sling.pointA;
        const posB = this.sling.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
      }
    }
  
    attach(body) {
      this.sling.bodyB = body;
    }
}