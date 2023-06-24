function preload(){

}
function setup(){
    canvas = createCanvas(500,400)
    canvas.position(530, 120 )
    video = createCapture(VIDEO)
    video.hide()
}
function draw(){
    image(video, 50, 50, 400, 300) 
    c = color('#ffcce6');
    f = color('#b3e0ff')
    fill(f)
    rect(50, 50, 30, 300);
    rect(430, 50, 30, 300);
    rect(50, 40, 400, 30);
    rect(50, 330, 400, 30)
    fill(c);
    circle(50, 50, 50)
    circle(50, 350, 50)
    circle(450, 50, 50)
    circle(450, 350, 50)
}
function snapshot(){
    save('picture.png')
}
