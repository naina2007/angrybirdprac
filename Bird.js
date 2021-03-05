class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.path = [];
  }

  display() {
   
    super.display();

   
    if(this.body.speed > 30 && this.body.position.x > 200){
      var position = [this.body.position.x,this.body.position.y]
      this.path.push(position);
    }
   
   for(var i=0;i<this.path.length;i++){
     image(this.smoke,this.path[i][0],this.path[i][1]);
   }
    
  
  }
}
