function GameProgress() {
    var score;
    var lives;
    var badges;
    var dx;
    var dy;
    //this.difficulty=difficulty;
}
GameProgress.prototype.drawScore=function (x,y) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+this.score, x, y);
};
GameProgress.prototype.drawLives=function (x,y) {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+this.lives, x, y);
};
GameProgress.prototype.init=function (score,lives,badges,dx,dy){
    this.score=score;
    this.lives=lives;
    this.dx=dx;
    this.dy=dy;
    //this.difficulty=difficulty;
    //this.dx = 7+difficulty;
    //this.dy = -7-difficulty;
    this.badges=badges;
};