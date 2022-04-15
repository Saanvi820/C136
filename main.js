status="";
objects=[];
function setup(){
    canvas=createCanvas(480, 340);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(420, 380);
    video.hide();
}

function start() {
        objectDetector=ml5.objectDetector('cocossd', modelLoaded);
        document.getElementById("status").innerHTML = "Status :Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded.");
    status = true;
}
function draw(){
    image(video, 0, 0, 520, 380);
}
