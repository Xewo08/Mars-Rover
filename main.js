canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

mars_img_array = ["mars image1.jpg","mars image2.jpg","mars image3.jpg","mars image4.jpg"];

random_number = Math.floor(Math.random()*4);
console.log(random_number);

background_image = mars_img_array[random_number];
console.log("Background image ="+background_image);
rover_image="rover.png";

rover_width=100;
rover_height=90;

rover_x=10;
rover_y=10;

function add(){
    background_img = new Image();
    background_img.onload = uploadingBackground;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onload = uploadingrover;
    rover_img.src = rover_image;
}

function uploadingBackground(){
    ctx.drawImage(background_img,0,0,canvas.width,canvas.height);
}

function uploadingrover(){
    ctx.drawImage(rover_img,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed == "37"){
        left();
        console.log("left");
    }
    if (keypressed == "38"){
        up();
        console.log("up");
    }
    if (keypressed == "39"){
        right();
        console.log("right");
    }
    if (keypressed == "40"){
        down();
        console.log("down");
    }
}
function up(){
    if (rover_y >= 0){
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed,X ="+rover_x+",Y ="+rover_y);
        uploadingBackground();
        uploadingrover();
    }
}
function down(){
    if (rover_y <= 500){
        rover_y = rover_y + 10;
        console.log("When up arrow is pressed,X ="+rover_x+",Y ="+rover_y);
        uploadingBackground();
        uploadingrover();
    }
}
function right(){
    if (rover_x <= 700){
        rover_x = rover_x + 10;
        console.log("When up arrow is pressed,X ="+rover_x+",Y ="+rover_y);
        uploadingBackground();
        uploadingrover();
    }
}
function left(){
    if (rover_x >= 0){
        rover_x = rover_x - 10;
        console.log("When up arrow is pressed,X ="+rover_x+",Y ="+rover_y);
        uploadingBackground();
        uploadingrover();
    }
}