//Canvas setup
try {
   
const canvas = document.querySelector('#myCanvas');
const ctx = canvas.getContext('2d');
const resetbtn = document.querySelector('.restart-btn');
//var element = document.getElementsByTagName("body")[0];
//element.style.cursor = "url('http://wiki-devel.sugarlabs.org/images/e/e2/Arrow.cur'), auto";

let screenW = screen.width;
let screenH = screen.height;


//1536
//864
canvas.width = 800;
 canvas.height = 500;
if (screenW < 951) {
    canvas.width = 500;
    canvas.height = 312.5;
}

let score = 0;

let gameover = false;
if(!gameover) {
    resetbtn.classList.remove('restart-btn');
   resetbtn.classList.add('hidden')
}

//For animation loop
ctx.font = "50px Press Start 2P";
let gameFrame = 0;

//Mouse Interactivity
//measure current size and position of canvas elemeny

let canvasPos = canvas.getBoundingClientRect();

const mouse = {
    x: canvas.width/2,
    y: canvas.height/2,

    click: false

}
const zoom = document.createElement('audio');
zoom.src='click.wav';
canvas.addEventListener('mousemove', (event)=>{
   
    mouse.click = true;
    mouse.x = event.x - canvasPos.left;
    mouse.y = event.y - canvasPos.top;
   
    
});
canvas.addEventListener('mousedown', (event)=>{
   
    mouse.click = true;
    mouse.x = event.x - canvasPos.left;
    mouse.y = event.y - canvasPos.top;
   
    
});
canvas.addEventListener('mousemove', (event)=>{
    mouse.click = true;
});
canvas.addEventListener('mouseup', (event)=>{
    mouse.click = true;
});
//Player
//Move player to coordinate
const playerLeft = new Image();
playerLeft.src= 'ducky.png';
const playerRight = new Image();
playerRight.src= 'ducky-right.png';
class Player {
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX =0;
        this.frameY =0;
        this.frame = 0;
        this.speed =10.5;
        this.center=0;
        //each sprite dimension
        this.spriteWidth = 640; // width/column
        this.spriteHeight = 640; // height/row

    }
    update() {
        //Origin (0,0) X:400, Y:250
        //Quadrant 1: X>400, Y>250
        //Quadrant 2: X<400, Y>250
        //Quadrant 3: X<400, Y<250
        //Quadrant 4: X>400, Y250
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
      let theta = Math.atan2(dy,dx);
        this.angle = Math.abs(theta+6.3);
        
     
        
        //Player can move left and right
        if (mouse.x != this.x) {
            this.x-=dx/this.speed; //Slow down player's speed
        }
        if (mouse.y != this.y) {
            this.y-=dy/this.speed; //Slow down player's speed
        }
        
        PlayerAnimation(this);
        
    
       
    }
       
    draw() {
        if (mouse.click) {
           // ctx.lineWidth = 0.2;
            ctx.beginPath();
            ctx.moveTo(this.x,this.y);
            //ctx.lineTo(mouse.x, mouse.y);
           // ctx.stroke();
        }
       //ctx.fillStyle = 'red';
        //ctx.beginPath();
        //ctx.arc(this.x,this.y,this.radius-10,0,Math.PI*2);
        //ctx.fill();
        //ctx.fillRect(this.x,this.y,this.radius,10);
        ctx.save();
        ctx.translate(this.x,this.y);
ctx.rotate(this.angle);
        ctx.closePath();
        if (this.x >= mouse.x) {
            
            ctx.drawImage(playerLeft, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth,this.spriteHeight, 0-40, 0-70,this.spriteWidth/4.4,this.spriteHeight/4.4);
           
        } else {
                ctx.drawImage(playerRight, this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth,this.spriteHeight, 0-65,0-70,this.spriteWidth/4.4,this.spriteHeight/4.4);
            
            }

        
        ctx.restore();
    }
    }
   
    function PlayerAnimation(player) {
        if (gameFrame % 10 ==0){
            player.frame++;
            if (player.frame >= 10) {player.frame =0;}
            if(player.frame == 4 || player.frame == 9) {player.frameX =0;}
            else {player.frameX++;}
            if (player.frame < 4) player.frameY=0;
            else if (player.frame < 9) player.frameY = 1;
            else player.frameY =0;
            }
        }
    
   

const player = new Player();
//Bubbles
const bubblesArray= [];
const bubbleImage = new Image();
bubbleImage.src="1.png";
class Bubble {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height+100;
        this.radius = 50;
        this.frameX=0
        this.fame=0;
        this.frameY=0;
        this.speed = Math.random() * 5+1;
        this.distance;
        this.counted;
        this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2';
    }
    update() {
        this.y -= this.speed; 
     
      
        const dx = this.x - player.x;
        const dy = this.y - player.y;
        //Distance formula between player & bubble
        this.distance = Math.sqrt(dx*dx + dy*dy);
    }
    draw() {
        //ctx.fillStyle = "green";
        ctx.beginPath();
        
        //ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
        //ctx.fill();
        ctx.closePath();
        //ctx.stroke();
        if (screenW < 951){ctx.drawImage(bubbleImage, this.x-67,this.y-80, this.radius*2, this.radius*2);}
        else{ctx.drawImage(bubbleImage, this.x-67,this.y-80, this.radius*2.75, this.radius*2.75);}
    }
}
const bubblePop1 = document.createElement('audio');
bubblePop1.src='balloon.wav';
function handleBubbles() {
    if (gameFrame % 50 == 0)  {
    bubblesArray.push(new Bubble());
    }
  
    for (let i=0; i < bubblesArray.length;i++)  {
        bubblesArray[i].update();
        bubblesArray[i].draw();
        if (bubblesArray[i].y < 0 - bubblesArray[i].radius*2) {
            bubblesArray.splice(i,1);
            i--;
        }
        
        //Collision between 2 circles happen when ther distance between center < 2 radii added together
        else if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius) {
                if(!bubblesArray[i].counted) {
                    if (bubblesArray[i].sound == "sound1") {
                        bubblePop1.play();
                    }
                    else {
                        bubblePop1.play();
                    }
                    score++;
                    bubblesArray[i].counted = true;
                    bubblesArray.splice(i,1);
                    
                }
        
    }
   
    }


    //Get rid off bubble after reach max height

}


//Enemies
const enemyImage = new Image();
enemyImage.src='rocket-enemy-flipped.png';
const enemy2Image = new Image();
enemy2Image.src='rocket-enemy.png';

class Enemy{
constructor() {
    this.x = canvas.width-800;
    this.y = Math.random() * (canvas.height-380) +380;
    this.radius = 50;
    this.speed = Math.random()*2+7;
  
    //For animation
    this.frame = 0;
    this.frameX =0;
    this.frameY=0;
    this.spriteWidth= 512;
    this.spriteHeight = 171;
}
//Draw red circle to detect collision
draw() {
//ctx.fillStyle = "red";
//Start drawing shape
//ctx.beginPath();
//ctx.arc(this.x+30,this.y-15,this.radius/1.5,0,Math.PI*2 /*full circle*/);
//fill with red color
//ctx.fill();
//Draw image

if (screenW<951){
    this.radius = 25;
    ctx.drawImage(enemyImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-90,this.y-65,this.spriteWidth/1.8,this.spriteHeight/1.8);
}
else {ctx.drawImage(enemyImage,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-90,this.y-65,this.spriteWidth/1.8,this.spriteHeight/1.8);}
}
update() {
    this.x -= this.speed;

    //If animate disappear entirely in the left edge of canvas
    if (this.x < 0 - this.radius*2) {
//Reset to the right edge
        this.x = canvas.width+200;
        //New vertical pos
        this.y = Math.random() * (canvas.height) - 150 + 90;
        //new speed
        this.speed = Math.random()*2+7;
    }
    //Animation
    Animation(this);
    Collide(this);
    
}
}
/*if (gameFrame % 5 ==0){
        enemy.frame++;
        if (enemy.frame >= 6) {enemy.frame =0;}
        if(enemy.frame == 2 || enemy.frame == 5) {enemy.frameX =0;}
        else {enemy.frameX++;}
        if (enemy.frame < 2) enemy.frameY=0;
        else if (enemy.frame < 5) enemy.frameY = 1;
        else enemy.frameY =0;
        }*/
function Animation(enemy) {
    if (gameFrame % 7 ==0){
        enemy.frame++;
        if (enemy.frame >= 3) {enemy.frame =0;}
        if(enemy.frame == 2) {enemy.frameX =0;}
        else {enemy.frameX++;}
        if (enemy.frame < 2) enemy.frameY=1;
        else enemy.frameY =1;
        }
    }
    function Collide(enemy) {
        //collision with player
     const dx = enemy.x-player.x;
     const dy = enemy.y - player.y;
     const distance = Math.sqrt(dx*dx+dy*dy);
    
    
     //If collide
if (distance < (enemy.radius + player.radius)/2) {
    console.log("COLLIDE");
    gameover = true;
    GameOver();
}
}

class Enemy2 extends Enemy {
    constructor() {
    super();
    this.x = 0;
    this.y=  Math.random() * (canvas.height-380) +380; 
    
}
draw() {
    //ctx.fillStyle = "red";
//Start drawing shape
//ctx.beginPath();
//ctx.arc(this.x+50,this.y-20,this.radius/1.3,0,Math.PI*2 /*full circle*/);
//fill with red color
//sctx.fill();
    ctx.drawImage(enemy2Image,this.frameX*this.spriteWidth,this.frameY*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-170,this.y-75,this.spriteWidth/1.8,this.spriteHeight/1.8);

}
update() {
    this.x += this.speed;
    //If animate disappear entirely in the left edge of canvas
    if (this.x > 900) {
//Reset to the right edge
        this.x = 0;
        //New vertical pos
        this.y = Math.random() * (canvas.height) - 150 + 90;
        //new speed
        this.speed = Math.random()*2+7;
       
    }
    Animation(this);
    Collide(this);

}
}
const end = document.createElement('audio');
end.src = "gameover.wav";

function GameOver() {
    if (gameover) {
    ctx.fillStyle = 'black';
    ctx.fillText('GAME OVER! Your Score: '+ score, canvas.width/9.5,canvas.height/2);
   ctx.font = "40px Orbitron";
    console.log(canvas.width);
    zoom.src= zoom.remove(zoom.src);    
    end.play();
   
}
}
class Restart{
    constructor() {
        this.x = canvas.width/2;
        this.y = canvas.height/3;
        
    }
    draw() {
       


    }
    update() {
        if(gameover) {
            Again();
        }
    }
}
function Again() {
    zoom.src = 'click.wav';
    gameover = false;
    score =0;
    location.reload();
    location.replace('index.html');
}



//Make enemy based on constructor
function handleEnemies(){
 enemy1.update();
 enemy1.draw();
 if (score >= 10) {
 enemy2.update();
 enemy2.draw();
                    }
}
const enemy1 = new Enemy();
const enemy2 = new Enemy2();

const background = new Image();
background.src='background.png';
const BG = {
    x1:0,
    x2: canvas.width,
    y:0,
    width: canvas.width,
    height: canvas.height
}
function handleBG() {
    BG.x1 --;
    if (BG.x1 < -BG.width) BG.x1 = BG.width;
    BG.x2--;
    if (BG.x2 < -BG.width) BG.x2 = BG.width;
    ctx.drawImage(background,BG.x1,BG.y,BG.width,BG.height);
    ctx.drawImage(background,BG.x2,BG.y,BG.width,BG.height);
}
//Restart pos:

//Animation loop
function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
   handleBG();
    handleBubbles();
    player.update();
    player.draw();
    handleEnemies();
    ctx.fillStyle= 'black';
    ctx.font=  "45px Orbitron";
    if (screenW < 951) {ctx.font = "30px Orbitron"};
    ctx.fillText('score: ' + score,10,50);
    gameFrame++;
    if (!gameover) requestAnimationFrame(animate);
    else {const reset = new Restart();
        resetbtn.classList.add('restart-btn');
        resetbtn.classList.remove('hidden');
        reset.draw();
      if(resetbtn.addEventListener('click', (event)=>{
          
            reset.update();
      }));
    }

}
animate();

window.addEventListener('resize', ()=>{
canvasPos = canvas.getBoundingClientRect();
})
}
catch(err) {
    console.log(err);
}
