let x1, y1;
let x, y, z;


function setup() {
  createCanvas (windowWidth, windowHeight);
  background(255);
  x1 = mouseX;
  y1 = mouseY;
  smooth();
  
}

let r,g,b,a = 0;
let r1, g1, b1;
let d = 0;
function draw() {

    if(mouseIsPressed) {
      if(keyIsPressed){
        if(key=='m'){
      r1=random(0.5, 1);
      g1=random(0.5, 1);
      b1=random(0.5, 1);
      r+=r1;
      g+=g1;
      b+=b1;
      a+=0.001;
      noStroke();
      fill(r, g, b, a);
      ellipse(mouseX,mouseY,d, d);
      d1 = random(1, 8);
      d+=d1;
      if (d>1000) d = 0;
      let size = random(1, 20);

      fill (r+50, g+50, b+50, 100);
      noStroke();
      x1= x1 + random(-100, 100);
      y1= y1 + random(-100, 100);
      ellipse(x1,y1,size,size);
      bubbles1();
      bubbles2();
        }

        else if(key=='r'){
          r=random(180,255);
          g1=random(0.5, 1);
          b1=random(0.5, 1);
          g+=g1;
          b+=b1;
          noStroke();
          fill(r, g, b, a);
          ellipse(mouseX,mouseY,d, d);
          d1 = random(1, 8);
          d+=d1;
          if (d>1000) d = 0;
          let size = random(1, 20);

          fill (r+50, g+50, b+50, 100);
          noStroke();
          x1= x1 + random(-100, 100);
          y1= y1 + random(-100, 100);
          ellipse(x1,y1,size,size);
          bubbles1();
          bubbles2();
        }
        else if(key=='g'){
          g=random(180,255);
          r1=random(0.5, 1);
          b1=random(0.5, 1);
          r+=r1;
          b+=b1;
          noStroke();
          fill(r, g, b, a);
          ellipse(mouseX,mouseY,d, d);
          d1 = random(1, 8);
          d+=d1;
          if (d>1000) d = 0;
          let size = random(1, 20);

          fill (r+50, g+50, b+50, 100);
          noStroke();
          x1= x1 + random(-100, 100);
          y1= y1 + random(-100, 100);
          ellipse(x1,y1,size,size);
          bubbles1();
          bubbles2();
        }
        else if(key=='b'){
          b=random(200,255);
          r1=random(0.5, 1);
          g1=random(0.5, 1);
          r+=r1;
          g+=g1;
          noStroke();
          fill(r, g, b, a);
          ellipse(mouseX,mouseY,d, d);
          d1 = random(1, 8);
          d+=d1;
          if (d>1000) d = 0;
          let size = random(1, 20);

          fill (r+50, g+50, b+50, 100);
          noStroke();
          x1= x1 + random(-100, 100);
          y1= y1 + random(-100, 100);
          ellipse(x1,y1,size,size);
          bubbles1();
          bubbles2();
        }
        else if(key=='p'){
          r=random(150,200);
          g1=random(0.5, 1);
          b=random(200,255);
          g+=g1;
          noStroke();
          fill(r, g, b, a);
          ellipse(mouseX,mouseY,d, d);
          d1 = random(1, 8);
          d+=d1;
          if (d>1000) d = 0;
          let size = random(1, 20);

          fill (r+50, g+50, b+50, 100);
          noStroke();
          x1= x1 + random(-100, 100);
          y1= y1 + random(-100, 100);
          ellipse(x1,y1,size,size);
          bubbles1();
          bubbles2();
        }
      }

    }
  else {
     r = random(0,100);r
     b = random(0,100); 
     g = random(0,100);
     a=20;
    }
  if (keyIsPressed){
  if (key == 'y'){
        c1 = random(100,255);
        c2 = random(100,255);
        for(let i=0;i<width;i++){

        stroke(155+i/9, c1, c2);
        line(i,0,i,height);
        bubbles2();
  }
    
}

    else if (key ==' '){
      bubblesR();
    }
}
  
}
function bubbles1(){
  let sizes = random(1, 10);
  for(let i = 0; i<10; i++){
    let x2 =random(-width, width);
    let y2 = random(-width, width);
    let t = random(100, 255);
    fill(r+100, g+100, b+100, t);
    ellipse(x2, y2, sizes, sizes);
  }
}
function bubbles2(){
  let sizes = random(1,5);
  for(let i = 0; i<50; i++){
    let x3 = random(0, width);
    let y3 = random(0, height);
    fill(255, 255, 255);
    ellipse(x3, y3, sizes, sizes);
  }
}
function bubblesR(){
    let sizes = random(10,50);
  for(let i = 0; i<500; i++){
    let x4 = random(-width, width);
    let y4 = random(-height, height);
    
    let t = random(0,255);
    fill(255, 255, 255, t);
    ellipse(x4, y4, sizes, sizes);
  }
}
function doubleClicked(){
  let w=random(100,250);
  noStroke();
  fill(255,255,w);
  ellipse(mouseX, mouseY, 60,40);
  fill(0);
  ellipse(mouseX+12,mouseY,5,5);
  ellipse(mouseX-12,mouseY,5,5);
  fill(255,200,50);
  ellipse(mouseX,mouseY+10,20,10);
}
