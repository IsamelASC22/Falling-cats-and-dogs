class Button{
    constructor(x, y, width, height, r, g, b, Opacity) {
        this.xPos = x;
        this.yPos = y;
        this.width = width;
        this.height = height;
        this.red = r;
        this.green = g;
        this.blue = b;
        this.opacity = Opacity;
    }
}

let myXPos = 400;  
let myYPos = 400;
//Enemy object Y-positions
let enemyYPos1 = -250;
let enemyYPos2 = -500;
let enemyYPos3 = 0;
let enemyYPos4 = -725;
let enemyYPos5 = -900;
let enemyYPos6 = -1500;
let enemyYPos7 = -1200;
let enemyYPos8 = -1375;
let enemyYPos9 = -1900;
let enemyYPos10 = -1775;

let enemyDirection = 1;
 

let myLeft, myRight, myTop, myBottom; //Your charater's boarders
let enemyLeft, enemyRight, enemyTop, enemyBottom; // enemy boarders

//Homescreen buttons
let buttonArray = [];
let button1;
let button2;
let button3;

let state = 1;

function setup() {
    createCanvas(500, 500);
    background(0);

    noStroke();

    rectMode(CENTER);

    button1 = new Button(250, 200, 75, 25, 0, 0, 255);
    button2 = new Button(250, 250, 75, 25, 0, 0, 255);
    button3 = new Button(250, 300, 75, 25, 0, 0, 255);

}


function draw() {
    background(0);
    // Homescreen
    if ( state == 1) {
        fill (0, 0, 255);
        rect (button1.xPos, button1.yPos, button1.width, button1.height, button1.opacity);
        rect (button2.xPos, button2.yPos, button2.width, button2.height, button2.opacity);
        rect (button3.xPos, button3.yPos, button3.width, button3.height, button3.opacity);
        fill(255);
        text("Easy", button1XPos + 25, button1YPos + 10, buttonWidth, buttonHeight);
        text("Medium", button2XPos + 20, button2YPos + 10, buttonWidth, buttonHeight);
        text("Hard", button3XPos + 25, button3YPos + 10, buttonWidth, buttonHeight);
        
        if (mouseX > 250 && mouseX < 325 && mouseY > 200 && mouseY < 225) {
            buttonOpacity = 20;
        }
        if (mouseX > 250 && mouseX < 325 && mouseY > 250 && mouseY < 275) {
            buttonOpacity = 20;
        }
        if (mouseX > 250 && mouseX < 325 && mouseY > 300 && mouseY < 325) {
            buttonOpacity = 20;
        }
    }
    //Game charater (green square)
    fill(0, 255, 0);
    rect(myXPos, myYPos, 50, 50);
    

    // Arrow key controls
    if (KeyIsDown(LEFT_ARROW)) { 
        myXPos -= 3;
    }
    if (KeyIsDown(RIGHT_ARROW)) {
        myXPos += 3;
    }

    //Falling objects
    enemyYPos1 += 3 * enemyDirection
   enemyYPos2 += 3 * enemyDirection
   enemyYPos3 += 3 * enemyDirection
   enemyYPos4 += 3 * enemyDirection
   enemyYPos5 += 3 * enemyDirection
   enemyYPos6 += 3 * enemyDirection
   enemyYPos7 += 3 * enemyDirection
   enemyYPos8 += 3 * enemyDirection
   enemyYPos9 += 3 * enemyDirection
   enemyYPos10 += 3 * enemyDirection

   fill(255, 0, 0);
    rect(100, enemyYPos1, 40, 40);
    rect(200, enemyYPos2, 40, 40);
    rect(300, enemyYPos3, 40, 40);
    rect(400, enemyYPos4, 40, 40);
    rect(50, enemyYPos5, 40, 40);
    rect(235, enemyYPos6, 40, 40);
    rect(345, enemyYPos7, 40, 40);
    rect(450, enemyYPos8, 40, 40);
    rect(150, enemyYPos9, 40, 40);
    rect(345, enemyYPos10, 40, 40);
     
    // enemy collsion
    myLeft = myXPos - 25;
    myRight = myXpos +25;
    myTop = myYPos -25;
    myBottom = myYPos +25;
    
    enemyLeft = enemyXPos - 25;
    enemyRight = enemyXPos + 25;
    enenmyTop = enemyYPos - 25;
    enemyBottom = enemyYPos + 25;
    // hit detection
    if(myleft > enemyRight || myRight < enemyleft || myTop > enemyBottom || myBottom < enemyTop){
    }
    // text
    else {
        fill(random(255), random(255), random(255));
        textSize(22);
        text("You've been hit!!", 140, 480);
    }
}

function mouseClicked() {
    if (state ==1) {
        if (mouseX > 250 && mouseX < 325 && mouseY > 200 && mouseY < 225) {
            state = 2
        }
        if (mouseX > 250 && mouseX < 325 && mouseY > 250 && mouseY < 275) {
            state = 3
        }
        if (mouseX > 250 && mouseX < 325 && mouseY > 300 && mouseY < 325) {
            state = 4
        }
    }
}

