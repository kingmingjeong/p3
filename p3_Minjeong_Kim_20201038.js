var s = [];
var br = 10;
var bg = 20;
var bb = 100;
var ver = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i = 0; i < 70; i++){
    s[i] = new S();
  }
}

function keyPressed(){
  if(key == 'f'){
    br = 140;
    bg = 180;
    bb = 255;
    ver = 1;
  }
  if(key == 's'){
    br = 10;
    bg = 20;
    bb = 100;
    ver = 0;
  }
}

function draw() {
  background(br + mouseX/5, bg + mouseX/5, bb + mouseX/3);
  
  for(var j = 0; j < 70; j++) {
    s[j].show();
    s[j].update();
  }
  
  randomSeed(0);
  strokeWeight(2.5);
  if(ver==0){
  stroke(200,200,255,100);}
  if(ver==1){
  stroke(255,220,220,100);}
  var x, y;
  var delta = map(mouseX, 0, windowWidth, 70, 200);
  for (y=0; y<windowHeight+delta; y+=delta) {
    for (x=0; x<windowWidth+delta*2; x+=delta) {
      noFill();
      var r = random(0,1);
      if(r<0.5){
        line(x, y-delta/4, x, y-delta/2);
        arc(x, y, delta/2, delta/2, radians(270),radians(90));
        line(x, y+delta/4, x, y+delta/2);
      }
      else{
        line(x, y-delta/4, x, y-delta/2);
        arc(x, y, delta/2, delta/2, radians(90),radians(270));
        line(x, y+delta/4, x, y+delta/2);
      }
      var a = random(0,1);
      if(a<0.5){
        line(x-delta*2, y+delta/2, x-delta*2+delta/4, y+delta/2);
        arc(x-delta/2, y+delta/2, delta/2, delta/2, radians(180),radians(360));
        line(x-delta/4, y+delta/2, x, y+delta/2);
      }
      else{
        line(x-delta*2, y+delta/2, x-delta*2+delta/4, y+delta/2);
        arc(x-delta/2, y+delta/2, delta/2, delta/2, radians(360),radians(180));
        line(x-delta/4, y+delta/2, x, y+delta/2);
      }
    }
  }
}

function S() {
  this.x = random(0, width);
  this.y = random(0, -height);
  this.xx = random(0, width);
  this.yy = random(0, -height);
  this.xxx = random(0, width);
  this.yyy = random(0, -height);
  
  this.show = function() {
    if (ver == 1){
      noStroke();
      fill(255);
      ellipse(this.x, this.y, random(1, 10), random(1, 10));
      if(mouseX < windowWidth/1.5){
        fill(255, 200, 200);
        ellipse(this.xx, this.yy, random(1, 10), random(1, 10));
      }
      if(mouseX < windowWidth/3){
        fill(255, 170, 170);
        ellipse(this.xxx, this.yyy, random(1, 20), random(1, 20));
      }
    }
    
    if (ver == 0){
     noStroke();
     var red = random(150, 255);
     var green = random(150, 255);
     var blue = random(150, 255);
     var w1 = random(5, 100);
     var w2 = random(5, 100);
     var w3 = random(5, 100);
     var w4 = random(5, 100);
     var w5 = random(5, 100);
     var w6 = random(5, 100);
     var w7 = random(5, 100);
     var w8 = random(5, 100);
     var w = random(30, 200);
     if(mouseX < windowWidth/4){
       fill(255, 220, 0);
       ellipse(this.xx, this.yy, 4, 4);
       triangle(this.xx-2, this.yy, this.xx+2, this.yy, this.xx, this.yy+6);
       triangle(this.xx-2, this.yy, this.xx+2, this.yy, this.xx, this.yy-6);
       triangle(this.xx-1, this.yy+1, this.xx-1, this.yy-1, this.xx-4, this.yy);
       triangle(this.xx+1, this.yy+1, this.xx+1, this.yy-1, this.xx+4, this.yy);
     }
     if(mouseX < windowWidth/2.5){
       fill(red, green, blue);
       ellipse(this.xxx, this.yyy, 5, 5);
       ellipse(this.xxx + w, this.yyy + w, 5, 5);
       ellipse(this.xxx - w, this.yyy - w, 5, 5);
     }
       fill(255);
       ellipse(this.x, this.y, 4, 4);
       triangle(this.x-2, this.y, this.x+2, this.y, this.x, this.y+6);
       triangle(this.x-2, this.y, this.x+2, this.y, this.x, this.y-6);
       triangle(this.x-2, this.y+1, this.x-2, this.y-1, this.x-6, this.y);
       triangle(this.x+2, this.y+1, this.x+2, this.y-1, this.x+6, this.y);
       
       for (var v = 0; v <3; v++){
         ellipse(this.x+w1, this.y+w5, 2, 2);
         ellipse(this.x+w2, this.y-w6, 2, 2);
         ellipse(this.x-w3, this.y-w7, 2, 2);
         ellipse(this.x-w4, this.y+w8, 2, 2);
       }
    }
  }

  this.update = function() {
    this.speed = random(2,8);
    this.gravity = 1.05;
    this.x = this.x + this.speed*this.gravity;
    this.y = this.y + this.speed*this.gravity;
    this.xx = this.xx + this.speed*this.gravity;
    this.yy = this.yy + this.speed*this.gravity;
    this.xxx = this.xxx + this.speed*this.gravity;
    this.yyy = this.yyy + this.speed*this.gravity;
    
    if (this.y > height) {
      this.y = random(0, -height);}
    if (this.x > width) {
      if (this.y < height){this.x= 0;}
      else {this.x = random(0, width);}
    }
    
    if (this.yy > height) {
      this.yy = random(0, -height);}
    if (this.xx > width) {
      if (this.yy < height){this.xx= 0;}
      else {this.xx = random(0, width);}
    }
    
    if (this.yyy > height) {
      this.yyy = random(0, -height);}
    if (this.xxx > width) {
      if (this.yyy < height){this.xxx= 0;}
      else {this.xxx = random(0, width);}
    }
  }
}
