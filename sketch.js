var canvas,form,questions,random,maze,player,enemy1,enemy2,enemy3,vaccine,quizIMG,endIMG,parkourIMG,mdocIMG,fdocIMG;
var checkpoint=0;
var doc1,doc2,b1,b2,b3,b4,b5,b6,b7,b8,b9,m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18,m19,m20,m21,m22,m23,m24,m25,m26,m27,m28,m29,m30,a1,a2,a3,a4,c1,c2,c3;
var b=[b1,b2,b3,b4,b5,b6,b7,b8,b9];
//gamestate
var gamestate=0;
function preload(){
  quizIMG=loadImage("quizimage.jpeg");
  endIMG=loadImage("endimg.jpeg");
  parkourIMG=loadImage("parkourimg.jpeg");
  mdocIMG=loadImage("mdoctor.png");
  fdocIMG=loadImage("ydoctor.png");
}
function setup() {
//canvas size
  canvas=createCanvas(1500,800);
  bgroup=new Group();
//form object
  form=new Form;
}

function draw() {
  if(gamestate==1){
    background(quizIMG);
  }
  if(checkpoint==1){
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
