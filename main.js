nose_x=0;
nose_y=0; 
ear_x=0
ear_y=0
function preload (){
    thug_spectacles = loadImage('thug specs.png');
}

function setup(){
    canvas= createCanvas(350,350);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(350,350);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses);
    
}

function draw(){
    image(video,0,0,350,350);
image(thug_spectacles,ear_x-120,ear_y-50,120,120);
}
function Snap(){
    Save('MyThugLife.png');
}
function modelLoaded(){

    console.log(" savage initiated");
}
function gotPoses(results){

    if(results.length >0)
    {
     nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
     ear_x=results[0].pose.leftEar.x;
     ear_y=results[0].pose.leftEar.y;

        console.log(results);
        console.log("nose_x=" +results[0].pose.nose.x);
        console.log("nose_y=" +results[0].pose.nose.y);
        
    }
}