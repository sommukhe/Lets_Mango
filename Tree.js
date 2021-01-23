class Tree {
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
         this.image = loadImage("sprites/tree.png")
        World.add(world, this.body);

       
    }
    display(){

        var TreePos = this.body.position;

        push()
        translate(TreePos.x, TreePos.y);
        imageMode(CENTER);
        image(this.image,0,0, 500, 500)
        pop()
    }
}