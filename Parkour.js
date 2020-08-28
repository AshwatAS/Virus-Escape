class Parkour{
    constructor(){
    }
    display(){
      //console.log(World.frameCount)
      var randx=Math.round(Math.random()*1200);
      var rand2x=Math.round(Math.random()*1200);
      var rand2y=Math.round(Math.random()*-100);
      var randy=Math.round(Math.random()*-100);
      if(World.frameCount%150==0){
        //console.log("150")
        var enemy=createSprite(randx,randy,20,20);
        enemy.addImage(enemyIMG);
        enemy.scale=0.05;
        enemy.velocityY=3;
        enemy.lifetime=randx/0.001;
        enemy.collide(particlegroup);
        enemygroup.add(enemy);
      }
      if(World.frameCount%250==0){
        //console.log("250");
        var enemy2=createSprite(randx,randy,20,20);
        enemy2.addImage(enemyIMG);
        enemy2.scale=0.05
        enemy2.velocityY=3;
        enemy2.lifetime=randx/0.001;
        enemy2.collide(particlegroup);
        enemy2group.add(enemy2);
      }
      if(World.frameCount%800==0){
        //console.log("10");
        var particle=createSprite(rand2x,rand2y,5,5);
        particle.velocityY=3;
        particle.lifetime=randx/0.001;
        particle.addImage(particleIMG);
        particle.scale=0.5;
        particlegroup.add(particle);
      }
      if(particlegroup.isTouching(player)){
        score=score+1
        particlegroup.destroyEach();
        //console.log(score);
      }
    }
}