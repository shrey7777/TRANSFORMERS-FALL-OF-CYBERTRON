
 var Canvas =new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;
block_image_width = 350;
block_image_height = 530;

var block_image_object= "";

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function (Img){
        block_image_object=Img;
        block_image_object.scaleToWidth(150);
        block_image_object.scaleToHeight(260);
        block_image_object.set({
            top:block_y,left:block_x
});
		Canvas.add(block_image_object)
		
        
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '66')
	{
		block_x=10;
		block_y=100;
		new_image("bumble.png");
	}
	if(keyPressed == '79')
	{
		block_x = 170;
		block_y=100;
		new_image("optimusprime.png");
	}
	
	if(keyPressed == '83')
	{
		block_x =380;
		block_y=100;
		new_image("sideswipe.png");
	}
	if(keyPressed == '70')
	{
		block_x = 550;
		block_y=100;
		new_image("fixit.jpg");
	}
	if(keyPressed == '65')
	{
		block_x = 750;
		block_y=100;
	 new_image("strongarm.jpg");
	}
	if(keyPressed == '71')
	{
		block_x = 920;
		block_y=100;
	 new_image("grimlock.png");
	}
	
}

