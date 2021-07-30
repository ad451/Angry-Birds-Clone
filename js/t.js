class terry{
    constructor(x,y,r){
        this.x=x
        this.y=y
        this.r=r
        var options={
            restitution:0.5,
           

        }
        this.body=Bodies.circle(x,y,r,options);
        Matter.Body.setMass(this.body, this.body.mass*4);
        World.add(world,this.body);

    }
    show() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);  
        rotate(angle);
        imageMode(CENTER);
       image(terrence,0,0,this.r*2,this.r*2);
        pop();
    }

}