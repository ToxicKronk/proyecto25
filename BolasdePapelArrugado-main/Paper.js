class Paper{

constructor(x, y, r){

    var options={
    isStatic:false,
restitucion:0.3,
friction:100,
desnsity:1.2
}
this.r=r

this.image=loadImage("paper.png");
this.body=Bodies.circle(x, y, r, options)
this.World.add(world, this.body);
}
display(){

    var paperpos=this.body.position;
    push()
    translate(paperpos.x, paperpos,y);
    rectMode(CENTER)
    fill(255)
    imageMode(CENTER);
    image(this.image, 0, 0, 2*this.r, 2*this.r)
    pop()


}


}