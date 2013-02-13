
var canvas = null;
var context = null;
var assets = ['/media/js/standalone/libs/gamedev_assets/robowalk/robowalk00.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk01.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk02.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk03.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk04.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk05.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk06.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk07.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk08.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk09.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk10.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk11.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk12.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk13.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk14.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk15.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk16.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk17.png',
			  '/media/js/standalone/libs/gamedev_assets/robowalk/robowalk18.png'
			 ];
var frames = [];

var onImageLoad = function(){
	console.log("IMAGE!!!");
};

var setup = function() {
	body = document.getElementById('body');
	canvas = document.createElement('canvas');

	context = canvas.getContext('2d');
	
	canvas.width = 100;
	canvas.height = 100;

	body.appendChild(canvas);

    
	// Load each image URL from the assets array into the frames array 
	// in the correct order.
	// Afterwards, call setInterval to run at a framerate of 30 frames 
	// per second, calling the animate function each time.
	// YOUR CODE HERE
    for(var i = 0 ; i<assets.length;i++){
        var img = new Image();
        img.src='http://udacity.com/'+assets[i];
        img.onload=onImageLoad;
        frames.push(img);
    }

    window.setInterval(function(){
    	animate();
    	currentImageIndex=(currentImageIndex+1)%frames.length;
    	// currentImageIndex++;
    	// if(currentImageIndex==frames.length)
    	// 	currentImageIndex=0;
    },33.3);
};
var currentImageIndex=0;
var animate = function(){
	console.log(currentImageIndex);
	// Draw each frame in order, looping back around to the 
	// beginning of the animation once you reach the end.
    // Draw each frame at a position of (0,0) on the canvas.
  
    // Try your code with this call to clearRect commented out
    // and uncommented to see what happens!
    //
    context.clearRect(0,0,canvas.width, canvas.height);
  	context.drawImage(frames[currentImageIndex],0,0);
	// YOUR CODE HERE
};

window.onload=setup;
