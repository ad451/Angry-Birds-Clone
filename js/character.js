class character {
    constructor(x, y, radius,restitution ,object) {
        this.x = x
        this.y = y
        this.radius = radius
        this.restitution=restitution
        this.object=object
        const options = {
            restitution: this.restitution
        }
        this.body = Bodies.circle(x, y, radius, options);
        Matter.Body.setMass(this.body, this.body.mass * 4);
        World.add(engine.world, this.body);

    }
    show() {
        const pos = this.body.position;
        const angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.object, 0, 0, this.radius * 2, this.radius * 2);
        pop();
    }

}