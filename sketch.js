var canvas,form,questions,random;
//gamestate
var gamestate=0;
function setup() {
//canvas size
  canvas=createCanvas(1200,800);
  var enemygroup=new Group();
  var enemy2group=new Group();
  var bullet1group=new Group();
  var bullet2group=new Group();
  var bullet3group=new Group(); 
  var bullet1=createSprite(player.x,player.y,10,10);
  var player = createSprite(190,375,15,15);
  bullet1.destroy();
  bullet1.lifetime=500; 
  var score=0;
//form object
  form=new Form;
}

function draw() {
//displaying the form. 
  form.display();
  drawSprites();
}
//function maze(){
  
//}
function parkour(){
}