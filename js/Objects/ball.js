function Ball(){
    var ballx;
    var bally;
    var ballRadius;
    var style;
    var startAngle;
    var endAngle=Math.PI*2;
}
Ball.prototype.drawBall(style){
    ctx.beginPath();
    ctx.arc(this.ballx, this.bally, this.ballRadius,this.startAngle,this.endAngle);
    ctx.fillStyle = style;
    ctx.fill();
    ctx.closePath();
}
Ball.prototype.initiate=function(bx,by,br,stAngle){
    this.ballx=bx;
    this.bally=by;
    this.startAngle=stAngle;
    this.endAngle=Math.PI*2;
}
