class box{
    constructor(x,y,w,h){
        this.x=x
        this.y=y
        this.w=w
        this.h=h
        this.body=Bodies.rectangle(x,y,w,h);
        this.body.isStatic=true;
        World.add(world,this.body);

    }
    show() {
        const angle = this.body.angle;
        push();
       
        
        rotate(angle);
        rectMode(CENTER);
        fill(0,233,212);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }

}