
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//canvas.width='1200';
//canvas.height='500';
var bricks = [];
var brickShape;
var brick = function ()
{
	var brickWidth;
	var brickHeigth;
	var brickRowCount;
	var brickColCount;
	var brickPadding;
    var brickOffsetTop;
    var brickOffsetLeft;
}

brick.prototype.init=function(w,h,r,c,p,t,l){
	this.brickWidth = w;
	this.brickHeigth = h;
	this.brickRowCount = r;
	this.brickColCount = c;
	this.brickPadding = p;
	this.brickOffsetTop = t;
	this.brickOffsetLeft = l;
	brickShape=new Image(w,h);
    brickShape.src='./img/blue.png';
    for(k=0; k<c; k++) {
    bricks[k] = [];
    for(m=0; m<r; m++) {
        bricks[k][m] = { x: 0, y: 0, status: 1 };
    }
}
}

brick.prototype.drawBricks =function(w,h,r,c,p,t,l) {
    for(i=0; i<c; i++) {
        for(j=0; j<r; j++) {
            if(bricks[i][j].status == 1) {
                var brickX = (i*(w+p))+l;
                var brickY = (j*(h+p))+t;
                bricks[i][j].x = brickX;
                bricks[i][j].y = brickY;
                ctx.beginPath();
                ctx.drawImage(brickShape,brickX,brickY,w,h);
                ctx.fillStyle = "#fddd15";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}






//Object.defineProperty(this,'brickWidth',{
	// 	get : function {
	// 		return brickWidth;
	// 	} 
	// 	set : function {
	// 		this.brickWidth = brickWidth;
	// 	}
	// })
	// Object.defineProperty(this,'brickHeigth',{
	// 	get : function {
	// 		return brickHeigth;
	// 	} 
	// 	set : function {
	// 		this.brickHeigth = brickHeigth;
	// 	}
	// })