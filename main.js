canvas=document.getElementById("mycanvas");
ctx=canvas.getContext("2d");
car_width=150;
car_height=75;
car1_x=10;
car1_y=10;
background_img="track.jpg";
car1_img="car1.png";
car2_x=10;
car2_y=100;
car2_img="car4.png";

function add()
{
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src=background_img;

    car1_imgTag= new Image();
    car1_imgTag.onload= uploadcar1;
    car1_imgTag.src=car1_img;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_img;

}

function uploadBackground()
{
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1()
{
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car_width,car_height);
}

function uploadcar2()
{
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car_width,car_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed=e.keyCode;
    if(keyPressed == '38')
    { car_1up(); console.log("up");  } 
    if(keyPressed == '40')
    { car_1down(); console.log("down");  }
    if(keyPressed == '37') 
    { car_1left(); console.log("left");  }
    if(keyPressed == '39')
    { car_1right(); console.log("right");}

    
    if(keyPressed == '87')
    { up(); console.log("up");  } 
    if(keyPressed == '83')
    { down(); console.log("down");  }
    if(keyPressed == '65') 
    { left(); console.log("left");  }
    if(keyPressed == '68')
    { right(); console.log("right");}
}

         function car_1up()
           { if(car1_y >=0) 
         { car1_y = car1_y - 10; 
        console.log("When up arrow is pressed, x = " + car1_x + " | y = " +car1_y);
         uploadBackground();
          uploadcar1();
          uploadcar2();
         }
         } 
         function car_1down()
          { if(car1_y <=500)
             { car1_y =car1_y+ 10;
             console.log("When down arrow is pressed, x = " + car1_x + " | y = " +car1_y);
              uploadBackground();
              uploadcar1();
              uploadcar2();
             } }
              function car_1left()
               { 
                   if(car1_x >= 0)
                    { 
                        car1_x =car1_x - 10;
                 console.log("When left arrow is pressed, x = " + car1_x + " | y = " +car1_y);
                  uploadBackground();
                  uploadcar1();
                  uploadcar2();

                 } } 
                 function car_1right() 
                 { if(car1_x <= 700)
                     { car1_x =car1_x + 10;
                         console.log("When right arrow is pressed, x = " + car1_x + " | y = " +car1_y);

                  uploadBackground();
                  uploadcar1(); 
                  uploadcar2();} }

                  function up()
           { if(car2_y >=0) 
         { car2_y = car2_y - 10; 
        console.log("When up arrow is pressed, x = " + car2_x + " | y = " +car2_y);
         uploadBackground();
          uploadcar1();
          uploadcar2();
         }
         } 
         function down()
          { if(car2_y <=500)
             { car2_y =car2_y+ 10;
             console.log("When down arrow is pressed, x = " + car2_x + " | y = " +car2_y);
              uploadBackground();
              uploadcar1();
              uploadcar2();
             } }
              function left()
               { 
                   if(car2_x >= 0)
                    { 
                        car2_x =car2_x - 10;
                 console.log("When left arrow is pressed, x = " + car2_x + " | y = " +car2_y);
                  uploadBackground();
                  uploadcar1();
                  uploadcar2();

                 } } 
                 function right() 
                 { if(car2_x <= 700)
                     { car2_x =car2_x + 10;
                         console.log("When right arrow is pressed, x = " + car2_x + " | y = " +car2_y);

                  uploadBackground();
                  uploadcar1(); 
                  uploadcar2();} }

