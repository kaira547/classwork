var status=""
function preload(){
    img=loadImage("");
}
function setup(){
 canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: detection object";
}
function modelLoaded(){
 console.log("model is loaded!");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResults(){
 
    }
