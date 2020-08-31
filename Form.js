class Form {
    constructor() {
//all the questions
        questions=["From which country was corona virus spreaded?","Which year did corona virus start?","Which month the corona virus was declared as a pandemic?","Which lady predicted the corona-virus in 2008?","What is the full form of W.H.O?"];
//doctor's name
        this.input = createInput("Doctor's Name");
//vaccine name
        this.input2=createInput("Vaccine Name");
//error message when answer is wrong
        this.error=createElement("h3");
        this.button = createButton("Play");
//the question presented
        this.question=createElement("h2");
        this.greeting=createElement("h3");
        this.button2=createButton("Submit");
        this.button3=createButton("Him");
        this.button4=createButton("Her");
        this.title = createElement('h1');
        //this.title.style.colour="white";
//the answer input
        this.answer = createInput('Write your answer in block letters only');
//random variable
        random=Math.round(Math.random()*4);
    }
//checks if the answer to the question is correct or incorrect
    check(){
      vacname=this.input2.value();
      //console.log(random+"check");
      if(random==0){
          if(this.answer.value()=="CHINA"){
              //gamestate=1;
              console.log("sucess");
              checkpoint=1;
          }
          else{
            this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+ vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
            this.error.position(50,300);
          }
      }
      if(random==1){
        if(this.answer.value()=="2019"|| this.answer.value()=="2020"){
            //gamestate=1;
            console.log("sucess");
            checkpoint=1;
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
      if(random==2){
        if(this.answer.value()=="MARCH"){
            //gamestate=1;
            console.log("sucess");
            checkpoint=1;
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
      if(random==3){
        if(this.answer.value()=="SYLVIA BROWNE"){
           //gamestate=1;
           console.log("sucess");
           checkpoint=1;
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
      if(random==4){
        if(this.answer.value()=="WORLD HEALTH ORGANISATION" || this.answer.value()=="WORLD HEALTH ORGANIZATION"){
            //gamestate=1;
            console.log("sucess");
            checkpoint=1;
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
  }
    display(){
//title of the game
      //console.log("what");
      this.title.html("Virus Escape");
      this.title.position(600, 0);
//positions and sizes of all the user inputs.
      this.input.position(600, 160);
      this.input.size(180,50);
      this.input2.position(600,220);
      this.input2.size(180,50)
      this.button.position(600, 300);
      var docname=this.input.value();
      var vacname=this.input2.value();
  
      this.button.mousePressed(()=>{
//hides unwanted objects
        this.input.hide();
        this.input2.hide();
        this.button.hide();
        doc1=createSprite(670,550,10,10);
        doc1.addImage(mdocIMG);
        doc1.scale=0.2
        this.button3.position(650,700);
        doc2=createSprite(850,550,10,10);
        doc2.addImage(fdocIMG);
        doc2.scale=0.3
        this.button4.position(850,700);
        this.greeting.html("Hi"+" "+docname+"!Welcome to virus escape. This game was created during the coronavirus pandemic."+"You need to pass through 3 stages including the next one in order to sucessfully create the "+vacname+".In the first stage you have to answer a question about the coronavirus so that we know you are capable of creating the vaccine. Then you have to pass a maze to obtain the vaccine while avoiding the viruses and finally you have to cross a parkour stage. Select your doctor to move on to the first stage.");
        this.greeting.position(20,200);
      });
      this.button3.mousePressed(()=>{
        doc2.destroy();
        doc1.destroy();
        g=1;
        this.button4.hide();
        checkpoint=0;
        background(quizIMG);
        this.greeting.html("Welcome to stage 1. Answer the question to move on to the next stage.")
        this.greeting.position(150,400);
        this.button3.hide();
        this.question.html(questions[random]);
        this.question.position(130, 100);
        this.answer.position(130,180);
        this.answer.size(250,50);
        this.button2.position(130,250);
      })
      this.button4.mousePressed(()=>{
        doc1.destroy();
        doc2.destroy();
        background(quizIMG);
        checkpoint=0;
        g=2;
        this.button4.hide();
        this.greeting.html("Welcome to stage 1. Answer the question to move on to the next stage.")
        this.greeting.position(50,400);
        this.button3.hide();
        this.question.html(questions[random]);
        this.question.position(130, 100);
        this.answer.position(130,180);
        this.answer.size(250,50);
        this.button2.position(130,250);
      })
//the submit button condition
      this.button2.mousePressed(()=>{
//hides all unwanted objects and checks the answer by calling the check function.
        this.answer.hide();
        this.greeting.hide();
        this.question.hide();
        this.button2.hide();
        this.check();
        if(checkpoint==1){
          maze=new Maze();
          //maze.display();
        }
      })
  
    }
  

  }
  