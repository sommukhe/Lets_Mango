class Boy {
    constructor(x,y,r){
        var options= {
            isStatic:true,
            restitution:0.3,
            friction:1,
            density: 1.2
         }
         this.x=x;
         this.y=y;
         this.r=r;

         this.body = Bodies.circle(this.x, this.y, this.r/2, options);
         this.image = loadImage("sprites/boy.png")
        World.add(world, this.body);

       
    }
    display(){

        var boyPos = this.body.position;

        push()
        translate(boyPos.x, boyPos.y);
        imageMode(CENTER);
        image(this.image,0,0, 200, 200)
        pop()
    }
}