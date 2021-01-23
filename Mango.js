class Mango {
    constructor(x,y,r){
        var options= {
            isStatic:true,
            restitution:0,
            friction:1,
         }
         this.x=x;
         this.y=y;
         this.r=r;

         this.body = Bodies.circle(this.x, this.y, this.r/2, options);
         this.image = loadImage("sprites/mango.png")
        World.add(world, this.body);

       
    }
    display(){

        var MangoPos = this.body.position;

        push()
        translate(MangoPos.x, MangoPos.y);
        imageMode(CENTER);
        image(this.image,0,0, 60, 60)
        pop()
    }
}