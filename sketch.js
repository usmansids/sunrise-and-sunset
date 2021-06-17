const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

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
   if(backgroundImg)
    background(backgroundImg);

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var responseJSON=await response.json();
    var date=responseJSON.datetime
    var hour=date.slice(11,13);
    if(hour>=4 && hour <=6){
        bg="sunrise1.png"
    }
    else
    if(hour>=6 && hour <=8){
        bg="sunrise2.png"
    }
    else
    if(hour>=8 && hour <=12){
        bg="sunrise3.png"
    }
    else
    if(hour>=12&& hour <=16){
        bg="sunrise4.png"
    }
    else
    if(hour>=16 && hour <=20){
        bg="sunrise2.png"

    }
    else bg="sunset9.png"
    // write code to fetch time from API
backgroundImg=loadImage(bg)
    //change the data in JSON format

    // write code slice the datetime


    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}
