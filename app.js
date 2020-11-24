

function setup() {
   createCanvas(1200, 280, WEBGL);
   createEasyCam();
   frameRate(20);

 
  
   
   
   mercurio = new sphere(1300, 0, 0, 3.8, 5, 5)
   mercurio.setColor('red')
   venus = new sphere(1330, 0, 0, 9.5, 10, 10)
   venus.setColor('brown')
   sol = new sphere(0, 0, 0, 1092, 20, 20)
   sol.setColor('yellow')
   terra = new sphere(1400, 0, 0, 10, 10, 10)
   terra.setColor('green')
   lua = new sphere(1410, 0, 0, 2.4, 5, 5)
   lua.setColor('grey')
   marte = new sphere(1460, 0, 0, 5, 10, 10)
   marte.setColor('red')
   jupiter = new sphere(1700, 0, 0, 110.5, 20, 20)
   jupiter.setColor('brown')
   saturno = new sphere(2110, 0, 0, 95.4, 20, 20)
   saturno.setColor('bisque')
   urano = new sphere(2300, 0, 0, 40, 20, 20)
   urano.setColor('aqua')
   netuno = new sphere(2500, 0, 0, 38, 20, 20)
   netuno.setColor('blue')
  
   
}


function draw() {
   background(100);
   beginShape();
   
  



   
   sol.draw();
   terra.draw();
   
   lua.draw();
   mercurio.draw();
   venus.draw();
   marte.draw();
   jupiter.draw();
   saturno.draw();
   urano.draw();
   netuno.draw();

   
   terra.rotation3Dy(30);
   lua.rotation3Dy(25);
   marte.rotation3Dy(12);
   netuno.rotation3Dy(25);
   saturno.rotation3Dy(90);
   urano.rotation3Dy(25);
   jupiter.rotation3Dy(46);
   mercurio.rotation3Dy(8);
   venus.rotation3Dy(7);
  

  


}







