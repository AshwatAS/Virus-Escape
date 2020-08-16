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
//the answer input
        this.answer = createInput('Write your answer in block letters only');
    }
//checks if the answer to the question is correct or incorrect
    check(){
      var vacname=this.input2.value();
      if(random==0){
          if(this.answer.value()=="CHINA"){
              //gamestate=1;
              console.log("sucess")
          }
          else{
            this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+ vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
              this.error.position(50,300);
          }
      }
      if(random==1){
        if(this.answer.value()=="2019"|| this.answer.value()=="2020"){
            //gamestate=1;
            console.log("sucess")
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
      if(random==2){
        if(this.answer.value()=="MARCH"){
            //gamestate=1;
            console.log("sucess")
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
      if(random==3){
        if(this.answer.value()=="SYLVIA BROWNE"){
           //gamestate=1;
           console.log("sucess")
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
      else{
        if(this.answer.value()=="WORLD HEALTH ORGANISATION"){
            //gamestate=1;
            console.log("sucess")
        }
        else{
          this.error.html("Sorry the answer,"+this.answer.value()+" is incorrect. Your first test on the "+vacname+" failed because you did not have all the knowledge about corona virus."+"Kindly click the restart button and reload the page to play again.");
          this.error.position(50,300);
        }
      }
  }
    display(){
//title of the game
      var title = createElement('h1');
//random variable
      var random=Math.round(Math.random(0,4));
      title.html("Virus Escape");
      title.position(600, 0);
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
//question is presented
        this.question.html(questions[random]);
        this.question.position(130, 100);
        this.answer.position(130,180);
        this.answer.size(250,50);
        this.button2.position(130,250);
        this.greeting.html("Hi"+" "+docname+"!Welcome to virus escape. This game has four stages."+"You need to pass through 3 stages including this one in order to sucessfully create the "+vacname+".");
        this.greeting.position(700,200);
      });
//the submit button condition
      this.button2.mousePressed(()=>{
//hides all unwanted objects and checks the answer by calling the check function.
        this.answer.hide();
        this.greeting.hide();
        this.question.hide();
        this.button2.hide();
        this.check();
      })
  
    }

  }
  