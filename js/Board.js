class Board{
    constructor(x,y,width,height){
        
        var options= {
            isStatic: true
        }
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        this.width = this.width
        this.height = this.height
        this.image = loadImage("./assets/board.png")

        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        push()
        imageMode(CENTER)
        rectMode(CENTER)
        scale(0.05)
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
    }
}