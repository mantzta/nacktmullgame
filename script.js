var hintergrund;
var viech;
var xPos;

var speed;
var viechYPos; // Definition der yPosition von "viech"

var viechLang; // Definition der Größe von "viech"
var viechHoch; // Definition der Größe von "viech"

var getroffen; // Unser Punktewert
var computer; // Computer Punktewert

var sPressed; // Ist das Spiel gestartet?
var treffer; // Treffer y/no?

function preload(){
  hintergrund = loadImage("url-1.jpg");
  viech = loadImage("nacktmull.png");
}

// Diese Methode legt die Grundlagen fest: Implementieren von Bildern, Festlegung von speed und den booleans
function setup(){
  createCanvas(1024, 634);
  viechYPos=-200;
  speed=1;
  getroffen = 0;
  computer = 0;
  
  sPressed = false;
  treffer = false;
  
  fill(255);
  
  cursor(CROSS);
  
  
}


function draw(){
  background(hintergrund);
  
  // Game startet bei "s"
  if(sPressed === true){
     textSize(25);
     text("Ich: "+getroffen, 40, 600); 
     text("Computer: "+computer, 835, 600); 
    
     image(viech, xPos, viechYPos);
     
     viechYPos += speed; // Geschwindigkeit des fallenden Objekts
  
     // Punkt für den Computer
     if(viechYPos >= 385){
       computer += 1;
       println("computer: "+computer); 
       viechYPos = -200;
       treffer = false;
      
     }
     // Spawn eines neuen images, falls man punktet
     if(treffer === true){
       viechYPos = -200;
       treffer = false;
     }
    // Random x-Wert Zuweisung  
     if(viechYPos === -200){
        xPos = random(0, 900);
     }
    // Änderung von speed nach bestimmten Punktzahlen   
     switch(getroffen){
        case 3: 
        speed = 5;
        break;
        case 5:
        speed = 8;
        break;
        case 10:
        speed = 10;
        break;
        case 15:
        speed = 15;
        break;
        case 20:
        speed = 18;
        break;
		case 25:
        speed = 23;
        break;
     }
    // Bedingung für "Game over"  
    if(computer === 5){
       sPressed=false;
       println("GAME OVER");
       speed = 1;
    }
    // Bedingung für den Sieg
    if(getroffen === 30){
       sPressed=false;
       println("WINWIN");
       speed = 1;
    }
     // Festlegung der verschiedenen Bildschirme (Start, Gewinnen, Verlieren, Finish)
  }else if(getroffen === 0 && computer === 0){
           textSize(40);
           text("Spiel starten mit Taste s", 260, 300); 
        }else if(computer === 5){
          textSize(100);
          text("VERLOOOOOOREN", 70, 300); 
        }else if(getroffen === 30){
          textSize(100);
          text("WIIIIIIIIIIIIIN",250, 300); 
        }else{
          textSize(100);
          text("SPIEL BEENDET.",140, 300); 
        }
  
}


// Die Methode bestimmt, wann ein Klick ein Treffer ist
function mouseClicked(){
  if(sPressed === true){
    if(mouseX>=xPos && mouseX<=xPos+175 && mouseY>=viechYPos+50 && mouseY<=viechYPos+150){
      getroffen += 1;
      treffer = true;
    }else{
      println("fuck");
    }
  }
}


  
  function keyTyped(){
  // Reset bei key "s"
    if(key === 's' && sPressed === false){
      computer=0;
      getroffen=0;
      sPressed=true;
      xPos = random(0, 900);
    }
    // Beenden des Spiels
     if(key === 'e'){
      sPressed=false;
      viechYPos=-200;
      
     }
    
    // P = Screenshot des Moments
    if(key === 'p'){
    saveFrame("Screenshot.##"); }
        
   
 
 }
   

  

 
  