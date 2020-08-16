var canvas,form,questions;
//gamestate
var gamestate=0;
function setup() {
//canvas size
  canvas=createCanvas(1200,800);
//form object
  form=new Form;
}

function draw() {
  //background(0); 
//displaying the form. 
  form.display();
  drawSprites();
}