status="";
object_to_be_deteted="";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_detect").innerHTML = "Status: Detecting Objects";
    object_to_be_deteted = document.getElementById("input").value;
}

function modelLoaded(){
    status = true;
    console.log("Model is Loaded!");
}

function draw(){
    image(video, 0, 0, 480, 380);
}
