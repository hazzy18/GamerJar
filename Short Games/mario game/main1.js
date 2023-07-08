let currentMoleTile;
let currentPlantTile;
let score=0;
let gameEnd=false;
let mole=document.createElement("img");
mole.src="./monty-mole.png";
let plant=document.createElement("img");
    plant.src="piranha-plant.png";
// let audio=noise.mp3;
window.onload=function(){
    setGame1();
}
function setGame1()
{
    for(let i=0;i<9;i++)
    {
        let tile=document.createElement("div");
        tile.id=i.toString();
        document.getElementById("board").appendChild(tile);

    }
    setInterval(setMole1,1500);
    setInterval(setPlant1,2000);
}
function randomTile1() 
{
    let num=Math.floor(Math.random()*9);
    return num.toString();
}
function setMole1()
{
    if(gameEnd)
    {
        return;
    }
    if(currentMoleTile)
    {
        currentMoleTile.innerHTML="";
    }
    // let mole=document.createElement("img");
    // mole.src="./monty-mole.png";
    let num=randomTile1();
    if(currentPlantTile && currentPlantTile.id==num)
    {
        return;
    }
    currentMoleTile=document.getElementById(num);
    currentMoleTile.appendChild(mole);
    currentMoleTile.addEventListener("click",result);

}
function setPlant1()
{
    
    if(gameEnd)
    {
        return;
    }
    if(currentPlantTile)
    {
        currentPlantTile.innerHTML="";
    }
    
    let num=randomTile1P();
    if(currentMoleTile && currentMoleTile.id==num)
    {
        return;
    }
    currentPlantTile=document.getElementById(num);
currentPlantTile.appendChild(plant);
currentPlantTile.addEventListener("click",over);

}
function randomTile1P()
{
    let num=Math.floor(Math.random()*9);
    return num.toString();
}
function result()
{
    if(gameEnd)
    {
        return;
    }
    if(this==currentMoleTile){
        let sound=document.createElement("audio");
    sound.src="noise.mp3";
        sound.play();
        let hit=document.createElement("img");
        hit.style.width="120px";
        hit.style.height="120px";
    hit.src="pic1.png";
    // let dust=document.createElement("img");
    // dust.src="effect.jpg";
    this.appendChild(hit);
    // this.appendChild(dust);
    this.removeChild(mole);
        score=score+10;
        document.getElementById("score").textContent=score;
    }
   
}
function over(){
    if(gameEnd)
    {
        return;
    }
    if(this==currentPlantTile){
        let sound=document.createElement("audio");
        sound.src="death.mp3";
            sound.play();
        let dead=document.createElement("img");
        dead.style.width="120px";
        dead.style.height="120px";
    dead.src="dead1.png";
    this.appendChild(dead);
    // this.appendChild(dust);
    this.removeChild(plant);
        document.getElementById("score").textContent= "Game Over ;(  Your score is : "+score;
        gameEnd=true;
    }
}