function display(e) {
    canvas.removeEventListener("click",display, false);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.font = "300px Arial";
    ctx.strokeText("Menu Page",100,300,1000);
    console.log(ctx)
    canvas.addEventListener('click',)

}