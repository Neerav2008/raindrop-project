class Raindrop {
    constructor(){
     this.x = random(0,400);
     this.y = 0;
     this.speed = random(5,10);
     this.height = random(10,20);
     
    
    }

    fall(){
        this.y = this.y+this.speed;
        if(this.y > 400){
           this.y  = 0;
        }
    }

     display(){
         stroke("blue");
      line(this.x,this.y,this.x,this.y+10);
     }
}