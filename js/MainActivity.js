let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
function start() {
    canvas.width='1200';
    canvas.height='700';
    welcomeImg=new Image();
    welcomeImg.src='img/welcome.jpg';
    ctx.drawImage(welcomeImg,0,0);
    canvas.addEventListener("click",display, false);
}
start();


