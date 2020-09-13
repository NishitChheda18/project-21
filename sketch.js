var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  wall=createSprite(1000, 200, thickness, height/2);
  bullet=createSprite(150,170,50,60)
  thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
bullet.velocityX=10
  background(0); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }
  
  if(damage<10)
  {
    wall.shapeColor=color(0,255,0)
  }
  } 
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge=lbullet.x+lbullet.width
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false
  }  

if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5* weight * speed * speed/(thickness*thickness*thickness)

 
}