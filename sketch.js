var canvas,form,questions,random,maze,player,enemy1,enemy2,enemy3,vaccine,quizIMG,endIMG,parkourIMG;
var checkpoint=0;
//gamestate
var gamestate=0;
function preload(){
  quizIMG=loadImage("quizimage.jpeg");
  endIMG=loadImage("endimg.jpeg");
  parkourIMG=loadImage("parkourimg.jpeg");
}
function setup() {
//canvas size
  canvas=createCanvas(1500,800);
//form object
  form=new Form;
}

function draw() {
  if(gamestate==0){
    background(quizIMG);
  }
  if(gamestate==1){
    background(0);
  }
//displaying the form. 
  form.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode==40){
    console.log("hi");
    player.velocityY=+2;
    player.velocityX=0;
  }
  if(keyCode==37){
    player.velocityX=-2
    player.velocityY=0;
  }
  if(keyCode==38){
    player.velocityY=-2;
    player.velocityX=0
  }
  if(keyCode==39){
    player.velocityX=+2
    player.velocityY=0;
  }
}
