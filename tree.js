    
    class Tree{
    constructor(x,y,w,h) {
    var options = {
    isStatic: true,
    }

    this.width = w;
    this.height = h;
    this.x = x;
    this.y = y;
    this.body = Bodies.rectangle(x,y,w,h,options);
    this.image = loadImage("tree.png");
    World.add(world,this.body);
    }
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    pop();
    }
    }