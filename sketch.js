
let cam;

const cube = [];
let index = 0;
let mix = [];
function setup() {
  // Disable the context menu on the canvas so the camera can use the right mouse button
	createCanvas(500, 500, WEBGL).elt.oncontextmenu = () => false;

  createControl();

  cam = createEasyCam({
	distance: 400,
  });

  angleMode(DEGREES);
    for (let x = -1; x <= 1; x++) {
	  for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {

		cube[index] = new Cubie(x,y,z,0);
		index++;
		}
	  }
	}
}
function turnX(part) {
	for(let i = 0; i < cube.length; i++) {
		if(cube[i].x == part) {
			cube[i].rotate = 1;
		}
	}
}

function turnY(part) {
	for(let i = 0; i < cube.length; i++) {
		if(cube[i].y == part) {
			cube[i].rotate = 2;
		}
	}
}

function turnZ(part) {
	for(let i = 0; i < cube.length; i++) {
		if(cube[i].z == part) {
			cube[i].rotate = 3;
		}
	}
}

function turnXb(part) {
	for(let i = 0; i < cube.length; i++) {
		if(cube[i].x == part) {
			cube[i].rotate = 4;
		}
	}
}

function turnYb(part) {
	for(let i = 0; i < cube.length; i++) {
		if(cube[i].y == part) {
			cube[i].rotate = 5;
		}
	}
}

function turnZb(part) {
	for(let i = 0; i < cube.length; i++) {
		if(cube[i].z == part) {
			cube[i].rotate = 6;
		}
	}
}

function keyPressed() {
	if( key == '1') {
		turnZ(-1);
	}
	if( key == '2') {
		turnZ(0);
	}
	if( key == '3') {
		turnZ(1);
	}
	if( key == '4') {
		turnY(-1);
	}
	if( key == '5') {
		turnY(0);
	}
	if( key == '6') {
		turnY(1);
	}
	if( key == '7') {
		turnX(-1);
	}
	if( key == '8') {
		turnX(0);
	}
	if( key == '9') {
		turnX(1);
	}

}


function draw() {
  background(51);
  scale(50);
  for (let i = 0; i < cube.length; i++) {
        cube[i].show();
  }
}
