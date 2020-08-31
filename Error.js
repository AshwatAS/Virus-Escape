class Error{
    constructor(){
        this.error=createElement("h4");
    }
    display(){
        var sco=score*2
        if(checkpoint==1){
            background(endIMG);
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
        if(checkpoint==2){
            background("white");
            if(score>=1){
                var b1=createSprite(725,500);
                b1.addImage(vacIMG);
                b1.scale=0.1;
                this.error.html("You sucessfully created your vaccine and saved the world."+"The "+vacname+" is effective for "+sco+" years");
                this.error.position(400,380);
            }
            if(score==0){
                var b1=createSprite(725,500);
                b1.addImage(vacIMG);
                b1.scale=0.1;
                this.error.html("You lost, you couldn't save the world. Your vaccine failed to kill the coronavirus. Reload the page to play again.")
                this.error.position(400,380);
                var b1=createSprite(725,500);
                b1.addImage(vacIMG);
                b1.scale=0.1;
                //image(vacIMG,725,500);
                var b2=createSprite(725,510);
                b2.addImage(enemyIMG);
                b2.scale=0.04;
            }
        }
        
    }
}