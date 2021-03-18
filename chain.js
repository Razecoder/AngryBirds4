class Chain {
constructor(bodyA,bodyB){
var options ={
bodyA: bird.body,
bodyB: constrainedLog.body,
stiffness: 0.04,
length: 10
}
this.chain = Constraint.create(options);

World.add(world,this.chain);
}
display(){

var ptA = this.chain.bodyA.position;
var ptB = this.chain.bodyB.position;

strokeWeight(3);
line(ptA.x,ptA.y,ptB.x,ptB.y);
}

}