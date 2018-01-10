var paddle=function (paddleWidth,paddleHeight,paddleX) {
    
    Object.defineProperty(this,'paddleWidth',{

        get: function(){

            return paddleWidth 
        },
        set: function(paddleWidth){            

            paddleWidth = paddleWidth
        }     
    })

    Object.defineProperty(this,'paddleHeight',{
        get: function(){

            return paddleHeight 
        },
        set: function(paddleHeight){            

            paddleHeight = paddleHeight;
        }     
    });

    Object.defineProperty(this,'paddleX',{
        get: function(){

            return paddleX 
        },
        set: function(paddleX){            

            paddleX =paddleX 
        }     
    });

 this.paddleWidth =  paddleWidth;
 this.paddleHeight = paddleHeight;
 this.paddleX = paddleX;


}

paddle.prototype.drawPaddle = function(){
    ctx.beginPath();
    ctx.rect(this.paddleX, canvas.height-this.paddleHeight, this.paddleWidth, this.paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

