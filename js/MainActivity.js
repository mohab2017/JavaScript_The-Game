let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
var scriptType=document.getElementById("myScript");
    welcomeImg=new Image();
    welcomeImg.src='img/c.jpg';
    welcomeImg.onload = function(){
    ctx.drawImage(welcomeImg, 0, 0);
    ctx.font = "30px Arial";
    ctx.strokeText("Click on Screen",450,225); 


};

    canvas.addEventListener("click",display);
  function display()
{
  ctx.clearRect(0,0,canvas.width,canvas.height);
  scriptType.src="js/menu.js";
} 




