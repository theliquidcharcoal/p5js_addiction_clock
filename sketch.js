class Mybutton {
    constructor(x, y, w, h, fillColor, myLabel) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fillColor = fillColor;
        this.textLabel = myLabel;
    }

    display() {
        // background(backgroundColor);
        fill(51, 51, 51, 100);
        rect(this.x, this.y, this.w, this.h);
        fill("#3FA9F5");
        textSize(24);
        text(this.textLabel, this.x + this.w * .25, this.y + this.h * .5);
    }

    onClick(myIndex) {

        var top = mouseX > this.x;
        var left = mouseY > this.y;
        var right = mouseX < this.x + this.w;
        var bottom = mouseY < this.y + this.h;

        if (top && left && right && bottom) {
            txtChoice = myIndex + 1;
        }
    }
}


function mousePressed() {
    buttons.forEach(function(element, index) {
        element.onClick(index);
    })
}


var buttons = [];
txtDisplay = ["Click one of the option above and you will know how many years you lost for your life.",
    "Smoking shortened your life by 25 years on average.",
    "Tobacco shortened your life by 20 years on average.",
    "Alchohol shortened your life by 10 years on average.",
    "Having no addiction doesn't mean you increased your life by some years."
];
// Fonts Preload

function preload() {
    // myFont = loadFont('https://fonts.googleapis.com/css?family=Roboto+Slab');
}




var txtChoice = 0;

var backgroundColor = 51;
var dFont = 'Roboto Slab';

function setup() {
    background(backgroundColor);
    var cnv = createCanvas(800, 800);
    cnv.parent("#canvas-container");

    // Clock Setup
    angleMode(DEGREES);

    cx = width / 2;
    cy = height / 2;

    var radius = min(width, height) / 2;
    secondsRadius = radius * 0.71;




    // Button Structure
    let hwidth = 800;
    buttons[0] = new Mybutton(100, 90, 120, 50, 10, "1. Smoke");
    buttons[1] = new Mybutton(300, 90, 120, 50, 50, "2. Tobacco");
    buttons[2] = new Mybutton(470, 90, 120, 50, 150, "3. Alcohol");
    buttons[3] = new Mybutton(640, 90, 120, 50, 225, "4. None");



}

function draw() {

    background(backgroundColor);

    // Main Question Text

    push();
    textSize(32);
    textAlign(CENTER);
    fill(122, 201, 67);
    translate(400, 0);
    textFont(dFont);
    text('What is your major addiction?', 0, 50);
    pop();

    // Display Buttons
    buttons.forEach(function(element) {
        fill("#3FA9F5");
        element.display();
    })

    // Clock
    clockHands();
    clockBody();

    // Answers 
    fill(255, 255, 255);
    textSize(24);
    textAlign(CENTER);
    textFont(dFont);
    text(txtDisplay[txtChoice], -300, 600, 600, 100);

    // Sympathy Text
    push();
    // translate(400, 00);
    // textAlign(CENTER);
    fill(255, 255, 0);
    textSize(14);
    text("But Hey! You should be know that you are not the only one. There are 1 billion people smoes everyday around the world and you guys are shortening your life by 25 years average.", -300, 700, 600, 200);
    pop();
}



// Clock Body
function clockBody() {
    var fontSize = 0.7;
    var numDistance = 360 / 12;
    let charCounter = 49;
    for (i = 0; i < 12; i++) {

        push();
        translate(00, 350);
        rotate(numDistance * i);
        // textFont("Arial");
        textStyle(BOLD);
        textAlign(CENTER);
        fill(220);
        textSize(24 * fontSize);
        rotate(210);
        var nums = i;
        console.log("numbers are = " + nums);
        // rotate();
        var numb = text(i + 1, 0, 120);
        numb.


        pop();
    }
};

// Clock Hands


function clockHands() {
    let hr = hour();
    let min = minute();
    let sec = second();
    let endSec = map(sec, 0, 60, 0, 360);
    let endMin = map(min, 0, 60, 0, 360);
    let endhr = map(hr % 12, 0, 12, 0, 360);
    // background('#222');
    push();
    translate(400, 350);
    rotate(-90);

    strokeWeight(8);
    push();
    translate(-150, -150);
    stroke("#fff");
    noFill();
    if (sec > 30) {

        // rect(0, 0, 300, 300, 150 / (sec % 30));
        // console.log(150 / (sec % 30));
        // 31 = 150,32 = 145,33 = 140,34,35...60 = 0

        let newSec = map(sec, 31, 60, 150, 0);
        console.log(newSec);
        rect(0, 0, 300, 300, newSec);

    } else {
        rect(0, 0, 300, 300, sec * 5);
        console.log(sec * 5);
    }
    pop();

    push();
    noFill();
    stroke("#7AC943");
    pop();

    push();
    rotate(endSec);
    stroke("#7AC943");
    line(0, 0, 80, 0);
    pop();

    stroke(200, 100, 150, 255);

    push();
    rotate(endMin);
    stroke("#3FA9F5");
    line(0, 0, 60, 0);
    pop();


    stroke(100, 200, 150, 255);

    push();
    rotate(endhr);
    stroke("#FF7A00");
    line(0, 0, 40, 0);
    fill(100, 200, 150, 255);
    pop();


    fill(200);
    stroke("#222222");
    ellipse(0, 0, 20, 20);
    pop();

    fill(100, 200, 150, 255);
    noStroke();
    textSize(32);
    rotate(0);
    translate(400, 0);
    textAlign(CENTER);
    fill("#FF7A00");
    text(hr, -45, 550);
    fill("#ff750a");
    text(":", -20, 548);

    fill("#3FA9F5");
    text(min, 10, 550);
    fill("#ff750a");
    text(":", 37, 548);

    fill("#7AC943");
    text(sec, 65, 550);

    // fill("#FF1D25");
    // text(hr + " : " + min + " : " + sec, 0, 600);

}


// References
// Daniel Shiffman's clock tutorial : https://www.youtube.com/results?search_query=p5js+clock
// Professor Sebastian Colin for clickable options