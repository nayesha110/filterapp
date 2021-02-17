function preload() {
    clown_nose=loadImage('https://i.postimg.cc/664kZfW9/clown-nose.png');
    
}

function setup() {
    canvas=createCanvas(400,400);
    canvas.position(470,210);
    video=createCapture(VIDEO)
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);//initializing pose net model
    poseNet.on('pose',gotPoses);

     }

     function gotPoses(results) {
     if (results.length>0) {
         console.log(results);
         console.log("nosex="+results[0].pose.nose.x);
         console.log("nosey="+results[0].pose.nose.y);
         

     }
         
     }


function draw() {
image(video,0,0,400,400)
fill(252, 44, 3)
stroke(252, 44, 3)
circle(nosex,nosey,20)
image(close_nose,nosex-15,nosey-15,30,30)
}

function take_snapshot() {
    save('nayesha_pic.png');
}

function modelLoaded() {
    console.log( "poseNet model is initiatliezed")
    
}