let boxSize=20;
var rows=25;
var cols=25;
//snake
let Sound=document.createElement("audio");
Sound.src="Snake.mp3";
let noise=document.createElement("audio");
noise.src="end.mp3";
var snakeX=5*boxSize;
var snakeY=5*boxSize;
//food
var foodX;
var foodY;
var velX=0;
var velY=0;
var arr=[];
let gameOver=false;
window.onload=function()
{
    board=document.getElementById("board");
    board.height=boxSize*rows;
    board.width=boxSize*cols;
    context=board.getContext("2d");
    document.addEventListener("keyup",directn);
     
    randomFood();
    // update();
    setInterval(update,100);
}
function update()
{
    if(gameOver)
    {
        return;
    }
    context.fillStyle="#030000";
    context.fillRect(0,0,board.width,board.height);
    context.fillStyle="red";
    context.fillRect(foodX,foodY,boxSize,boxSize);

   
    if(snakeX==foodX && snakeY==foodY)
    {
       
        Sound.play();
        arr.push([foodX,foodY]);
      
        randomFood();
    }
   
    for(let i=arr.length-1;i>0;i--)
{
arr[i]=arr[i-1];
}
if(arr.length)
{
    arr[0]=[snakeX,snakeY];
}

    context.fillStyle="green";
    snakeX=snakeX+(velX*boxSize);
    snakeY=snakeY+(velY*boxSize);
    context.fillRect(snakeX,snakeY,boxSize,boxSize);

    for(let i=0;i<arr.length;i++)
{
    context.fillRect(arr[i][0],arr[i][1],boxSize,boxSize);
}
  
//gameover conditions
if(snakeX<0|| snakeX>(cols*boxSize)|| snakeY<0 || snakeY>(rows*boxSize))
{
    noise.play();

    gameOver=true;
    document.getElementById("write").innerHTML="Game over ;(";
    
}
 for(let i=0;i<arr.length;i++)
 {
    if(snakeX==arr[i][0] && snakeY==arr[i][1])
    {
        noise.play();
        gameOver=true;
        document.getElementById("write").innerHTML="Game over ;(";
       
    }
 }
    
}
function randomFood()
{
    foodX=(Math.floor(Math.random()*cols))*boxSize;
    foodY=(Math.floor(Math.random()*rows))*boxSize;

}
function directn(e){
    if(e.code=="ArrowUp" && velY!=1)
    {
        velX=0;
        velY=-1;

    }
    if(e.code=="ArrowDown" && velY!=(-1))
    {
        velX=0;
        velY=1;

    }
    if(e.code=="ArrowRight" && velX!=(-1))
    {
        velX=1;
        velY=0;

    }
    if(e.code=="ArrowLeft" && velX!=1)
    {
        velX=-1;
        velY=0;

    }

}
