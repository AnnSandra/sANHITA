var gameState  ="start";




function preload(){

}

function setup(){

    createCanvas(windowWidth,windowHeight);




}

function draw(){


    if(gameState === "start"){
        background("#ff8080"); 
        //title
        textSize(30)
        text(" Magic Shop",width/2-100,100);

        //story;
        textSize(24);
        text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmDuis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",50,height/2)
        text("Please ENTER to start",width/2-180,height-200);

        
        if(keyCode === 13){
            gameState ="maze";

        }
    }


    if(gameState === "maze"){
        background("#aa80ff");

    }

}