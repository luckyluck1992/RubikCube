function createControl() {

	//UP--Down

	let canvasControlUpDown = document.createElement('div');
	canvasControlUpDown.id = "canvasControlUpDown";
	document.body.appendChild(canvasControlUpDown);
	let imgUp = document.createElement('img');
	imgUp.src = 'pics/up.jpg';
	imgUp.addEventListener("click", function() {
		turnY(-1);
	});
	canvasControlUpDown.appendChild(imgUp);

	let imgUpb = document.createElement('img');
	imgUpb.src = 'pics/upb.jpg';
	imgUpb.addEventListener("click", function() {
		turnYb(-1);
	});
	canvasControlUpDown.appendChild(imgUpb);

	let imgDown = document.createElement('img');
	imgDown.src = 'pics/down.jpg';
	imgDown.addEventListener("click", function() {
		turnYb(1);
	});
	canvasControlUpDown.appendChild(imgDown);
	let imgDownb = document.createElement('img');
	imgDownb.src = 'pics/downb.jpg';
	imgDownb.addEventListener("click", function() {
		turnY(1);
	});
	canvasControlUpDown.appendChild(imgDownb);

	//LEFT--RIGHT

	let canvasControlLeftRight = document.createElement('div');
	canvasControlLeftRight.id = "canvasControlLeftRight";
	document.body.appendChild(canvasControlLeftRight);
	let imgLeft = document.createElement('img');
	imgLeft.src = 'pics/left.jpg';
	imgLeft.addEventListener("click", function() {
		turnXb(-1);
	});
	canvasControlLeftRight.appendChild(imgLeft);

	let imgLeftb = document.createElement('img');
	imgLeftb.src = 'pics/leftb.jpg';
	imgLeftb.addEventListener("click", function() {
		turnX(-1);
	});
	canvasControlLeftRight.appendChild(imgLeftb);

	let imgRight = document.createElement('img');
	imgRight.src = 'pics/right.jpg';
	imgRight.addEventListener("click", function() {
		turnX(1);
	});
	canvasControlLeftRight.appendChild(imgRight);

	let imgRightb = document.createElement('img');
	imgRightb.src = 'pics/rightb.jpg';
	imgRightb.addEventListener("click", function() {
		turnXb(1);
	});
	canvasControlLeftRight.appendChild(imgRightb);

	//FRONT--BACK

	let canvasControlFrontBack = document.createElement('div');
	canvasControlFrontBack.id = "canvasControlFrontBack";
	document.body.appendChild(canvasControlFrontBack);
	let imgFront = document.createElement('img');
	imgFront.src = 'pics/front.jpg';
	imgFront.addEventListener("click", function() {
		turnZ(1);
	});
	canvasControlFrontBack.appendChild(imgFront);

	let imgFrontb = document.createElement('img');
	imgFrontb.src = 'pics/frontb.jpg';
	imgFrontb.addEventListener("click", function() {
		turnZb(1);
	});
	canvasControlFrontBack.appendChild(imgFrontb);

	let imgBack = document.createElement('img');
	imgBack.src = 'pics/back.jpg';
	imgBack.addEventListener("click", function() {
		turnZb(-1);
	});
	canvasControlFrontBack.appendChild(imgBack);

	let imgBackb = document.createElement('img');
	imgBackb.src = 'pics/backb.jpg';
	imgBackb.addEventListener("click", function() {
		turnZ(-1);
	});
	canvasControlFrontBack.appendChild(imgBackb);


	let btnShuffle = document.createElement('Button');
	btnShuffle.id = "shuffle";

	canvasControlFrontBack.appendChild(btnShuffle);

	btnShuffle.addEventListener("click", function() {
		shuffling();
	});

	btnShuffle.innerHTML = "Shuffle";

	let btnSolve = document.createElement('Button');
	btnSolve.id = "solve";
	canvasControlFrontBack.appendChild(btnSolve);

	btnSolve.addEventListener("click", function() {
		solve();
	});

	btnSolve.innerHTML = "Solve";

}
