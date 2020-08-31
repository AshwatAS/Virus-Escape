class Parkour{
    constructor(){
      this.intro=createElement("h4");
      this.intro.html("Welcome to the last stage. Avoid the viruses and collect as many particles as you can to make your vaccine pure and more effective.");
      this.intro.position(725,500);
      //document.getElementById(this.intro).style.color="white";
      player=createSprite(725,700);
      if(g==1){
        //console.log("m");
        player.addImage(mdocIMG);
        player.scale=0.09;
    }
    if(g==2){
        //console.log("f");
        player.addImage(fdocIMG);
        player.scale=0.09;
    }
    }
    display(){
      //console.log(World.frameCount)
      count=Math.round(World.frameRate/90)+count;
      var randx=Math.round(Math.random()*1200);
      var rand2x=Math.round(Math.random()*1200);
      var rand2y=Math.round(Math.random()*-100);
      var randy=Math.round(Math.random()*-100);

      if(World.frameCount%75==0){
        //console.log("150")
        var enemy=createSprite(randx,randy,20,20);
        enemy.addImage(enemyIMG);
        enemy.scale=0.05;
        enemy.velocityY=(4 + 3*count/100);
        //vy=enemy.velocityY;
        enemy.lifetime=randx/0.001;
        enemy.collide(particlegroup);
        enemygroup.add(enemy);
      }
      if(World.frameCount%160==0){
        //console.log("250");
        var enemy2=createSprite(randx,randy,20,20);
        enemy2.addImage(enemyIMG);
        enemy2.scale=0.05
        enemy2.velocityY=(4 + 3*count/100);
        enemy2.lifetime=randx/0.001;
        enemy2.collide(particlegroup);
        enemy2group.add(enemy2);
      }
      if(World.frameCount%750==0){
        //console.log("10");
        var particle=createSprite(rand2x,rand2y,5,5);
        particle.velocityY=3;
        particle.lifetime=randx/0.001;
        particle.addImage(particleIMG);
        particle.scale=0.5;
        particlegroup.add(particle);
      }
      if(particlegroup.isTouching(player)){
        score=score+1;
        //enemygroup.setVelocityYEach(vy+0.8);
        //enemy2group.setVelocityYEach(vy+0.7);
        //vy=vy+0.5;
        particlegroup.destroyEach();
        //console.log(score);
      }
      if(enemygroup.isTouching(player)){
        enemygroup.destroyEach();
        enemy2group.destroyEach();
        particlegroup.destroyEach();
        this.intro.hide();
        player.destroy();
        gamestate="end";
        end=new Error();
      }
      if(enemy2group.isTouching(player)){
        gamestate="end";
        end=new Error();
        this.intro.hide();
        enemy2group.destroyEach();
        player.destroy();
        enemygroup.destroyEach();
        particlegroup.destroyEach();
      }
      if(player.x>1475 || player.x<-25){
        player.x=725;
      }
      if(player.y>810 || player.y<-10){
        player.y=700;
      }
    }
}