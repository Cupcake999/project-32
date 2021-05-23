const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time
var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if (backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    if (hour<12 && hour<0){
        var time ="AM"
    }
    else {
        var time ="PM"
    }
    // write code to display time in correct format here
    //textSize(35)
//text("TIME : "+hour+time,50,50)

}

async function getBackgroundImg(){
    // write code to fetch time from API
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    //change the data in JSON format
  var responseJSON = await response.json()
  console.log(responseJSON)
    // write code slice the datetime
var datetime = responseJSON.datetime;
console.log(datetime)
var hour = datetime.slice(11,13)
console.log(hour)
    // add conditions to change the background images from sunrise to sunset

if(hour <= 8 && hour >= 6){
     bg = "sunrise1.png";
}
else if(hour <= 10 && hour >= 8){
     bg = "sunrise2.png";
}
else if(hour <= 12 && hour >= 10){
     bg = "sunrise4.png";
}
else if(hour <= 14 && hour >= 12){
    bg = "sunrise5.png";
}
else if(hour <= 16 && hour >= 14){
     bg = "sunset7.png";
}
else if(hour <= 18 && hour >= 16){
    bg = "sunset10.png";
}
else if(hour <= 20 && hour >= 18){
     bg = "sunset11.png";
}
else {
    bg = "sunset12.png";
}
    //load the image in backgroundImg variable here
backgroundImg = loadImage(bg)
}
