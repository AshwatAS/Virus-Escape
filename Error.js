class Error{
    constructor(){
        this.error=createElement("h4");
    }
    display(){
        this.error.html("You lost, you couldn't save the world. Your vaccine got infected by the coronavirus. Reload the page to play again.")
        this.error.position(400,380);
        var b1=createSprite(725,500);
        b1.addImage(vacIMG);
        b1.scale=0.1;
        //image(vacIMG,725,500);
        var b2=createSprite(725,510);
        b2.addImage(enemyIMG);
        b2.scale=0.04;
        //image(enemyIMG,725,500);
        
    }
}