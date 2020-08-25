class Parkour{
    constructor(){
    }
    display(){
      console.log(World.frameCount)
      var randx=Math.round(Math.random()*1200);
      var randy=Math.round(Math.random()*-100);
      if(World.frameCount%150==0){
        console.log("150")
        var enemy=createSprite(randx,randy,20,20);
        enemy.addImage("enemyIMG");
        enemy.velocityY=3;
        enemy.lifetime=randx/0.001;
        enemygroup.add(enemy);
      }
      if(World.frameCount%250==0){
        console.log("250");
        var enemy2=createSprite(randx,randy,20,20);
        enemy.addImage("enemyIMG");
        enemy2.velocityY=3;
        enemy2.lifetime=randx/0.001;
        enemy2group.add(enemy2);
      }
      if(World.frameCount%10==0){
        console.log("10");
        var particle=createSprite(randx,randy,5,5);
        particle.velocityY=3;
        particle.lifetime=randx/0.001;
        particle.addImage("particleIMG");
        particlegroup.add(particle);
      }
      /*if(particlegroup.isTouching(player)){
        score=score+1
        particlegroup.destroyEach();
        console.log(score);
          //enemygroup=new Group();
          //enemy2group=new Group();
          ///particlegroup=new Group();
          //player = createSprite(190,375,15,15);
          //score=0;*/
      //}
    }
}