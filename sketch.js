let CircSize,PosX,PosY,offset, space, numShapes;

var words = ['funky lemon','citrus']

function setup() {
  createCanvas(400,400);
  background(192, 224, 0);
  
   textSize(22);
  fill('yellow');
  text(words[0], 6, 20);
  fill('cornflowerblue');
  text(words[0], 6, 45);
  fill('tomato');
  text(words[0], 6, 70);
  fill('limegreen');
  text(words[0], 6, 95);

  describe('The text "funky lemon" written on several lines, each in a different color.');
  
  textSize(22);
  fill('yellow');
  text(words[1], 345,275);
  fill('cornflowerblue');
  text(words[1], 345,295);
  fill('tomato');
  text(words[1], 345,315);
  fill('limegreen');
  text(words[1], 345,335);

  describe('The text "funky lemon" written on several lines, each in a different color.');
  
  PosX = width/2;
   PosY = height/2;
   numShapes = 20;
  circleSize = width-100;
  space = circleSize/numShapes;
  offSet = 10;
  

  for(i=0; i < numShapes; i++)
    {
      let randomColor = floor(random (0,3))
      if (randomColor == 0)
        {
          fill(252,231,0)   
        }
      else if (randomColor == 1)
        {
          fill(2224,207,0)
        }
      else 
        {
          fill(224,123,0)
          
        }
      let randomoffSet = floor(random (0,2))
      if(randomoffSet == 0)
        {
          offSet *= -1;
         
        }
      
      else
        {
          offSet = abs(offSet);
        }
      
      strokeWeight(2);
      stroke(224, 181, 1)
      circle(PosX+offSet*i, PosY, circleSize-space*i)
      
  

    
}
  
  textSize(25)
  fill('tomato')
  text('Amara Mancia', 237,370)
  

  
 }
