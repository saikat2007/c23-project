class plane {
    var plane,speed,weight,thikness
    car=createSprite(50,200,50,50);
    
  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)
  this.image = loadImage("sprites/plane.png");
}
{function keyPressed() {
  f (keyCode === LEFT_ARROW) 
  { helicopterSprite.x=helicopterSprite.x-20; translation={x:-20,y:0} Matter.Body.translate(packageBody, translation