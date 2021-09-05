

function extround(zahl,n_stelle) {
	zahl = (Math.round(zahl * n_stelle) / n_stelle);
   	return zahl;
}

function rotVectorX(e) {
	let ey = e[1];
	let ez = e[2];

	return [e[0],ey * math.cos(math.pi/50) - ez * math.sin(math.pi/50), ey * math.sin(math.pi/50) + ez * math.cos(math.pi/50)];

}

function rotVectorXb(e) {
	let ey = e[1];
	let ez = e[2];

	return [e[0],ey * math.cos(-math.pi/50) - ez * math.sin(-math.pi/50), ey * math.sin(-math.pi/50) + ez * math.cos(-math.pi/50)];

}

function rotVectorY(e) {
	let ex = e[0];
	let ez = e[2];

	return [ex * math.cos(math.pi/50) - ez * math.sin(math.pi/50),e[1],ex * math.sin(math.pi/50) + ez * math.cos(math.pi/50)];


}

function rotVectorYb(e) {
	let ex = e[0];
	let ez = e[2];

	return [ex * math.cos(-math.pi/50) - ez * math.sin(-math.pi/50),e[1],ex * math.sin(-math.pi/50) + ez * math.cos(-math.pi/50)];

}

function rotVectorZ(e) {
	let ey = e[1];
	let ex = e[0];

	return [ex * math.cos(math.pi/50) - ey * math.sin(math.pi/50),ex * math.sin(math.pi/50) + ey * math.cos(math.pi/50),e[2]];

}

function rotVectorZb(e) {
	let ey = e[1];
	let ex = e[0];

	return [ex * math.cos(-math.pi/50) - ey * math.sin(-math.pi/50),ex * math.sin(-math.pi/50) + ey * math.cos(-math.pi/50),e[2]];

}

let a = 1;
class Cubie {

  constructor(x,y,z) {
    this.x = x;
    this.y = y;
    this.z = z;
	this.highlight = false;
	this.rotate = 0;
	this.rotationstep = 0;
	this.angle = 0;
	this.e1 = [1,0,0];
	this.e2 = [0,1,0];
	this.e3 = [0,0,1];
  }
  show() {

	if(this.rotate == 1) {
		if(this.rotationstep != 1) {
			let calcy = this.y;
			let calcz = this.z;
			this.y = calcy * math.cos(math.pi/50) - calcz * math.sin(math.pi/50);
			this.z = calcy * math.sin(math.pi/50) + calcz * math.cos(math.pi/50);

			this.e1 = rotVectorX(this.e1);

			this.e2 = rotVectorX(this.e2);

			this.e3 = rotVectorX(this.e3);


			this.angle = extround(this.angle + 3.6, 10);
			this.rotationstep = extround(this.rotationstep + 0.04, 100);
		}else {
			let calcy = this.y;
			let calcz = this.z;
			this.y = round(calcy * math.cos(math.pi/50) - calcz * math.sin(math.pi/50));
			this.z = round(calcy * math.sin(math.pi/50) + calcz * math.cos(math.pi/50));
			this.rotationstep = 0;
			this.rotate = 0;
			this.angle = 0;

			this.e1[0] = round(this.e1[0]);
			this.e1[1] = round(this.e1[1]);
			this.e1[2] = round(this.e1[2]);
			this.e2[0] = round(this.e2[0]);
			this.e2[1] = round(this.e2[1]);
			this.e2[2] = round(this.e2[2]);
			this.e3[0] = round(this.e3[0]);
			this.e3[1] = round(this.e3[1]);
			this.e3[2] = round(this.e3[2]);

		}
	}

	if(this.rotate == 2) {
		if(this.rotationstep != 1) {
			let calcx = this.x;
			let calcz = this.z;
			this.x = calcx * math.cos(math.pi/50) - calcz * math.sin(math.pi/50);
			this.z = calcx * math.sin(math.pi/50) + calcz * math.cos(math.pi/50);

			this.e1 = rotVectorY(this.e1);

			this.e2 = rotVectorY(this.e2);

			this.e3 = rotVectorY(this.e3);


			this.angle = extround(this.angle + 3.6, 10);
			this.rotationstep = extround(this.rotationstep + 0.04, 100);
		}else {
			let calcx = this.x;
			let calcz = this.z;
			this.x = round(calcx * math.cos(math.pi/50) - calcz * math.sin(math.pi/50));
			this.z = round(calcx * math.sin(math.pi/50) + calcz * math.cos(math.pi/50));
			this.rotationstep = 0;
			this.rotate = 0;
			this.angle = 0;

			this.e1[0] = round(this.e1[0]);
			this.e1[1] = round(this.e1[1]);
			this.e1[2] = round(this.e1[2]);
			this.e2[0] = round(this.e2[0]);
			this.e2[1] = round(this.e2[1]);
			this.e2[2] = round(this.e2[2]);
			this.e3[0] = round(this.e3[0]);
			this.e3[1] = round(this.e3[1]);
			this.e3[2] = round(this.e3[2]);

		}
	}

	if(this.rotate == 3) {
		if (this.rotationstep !=1) {
			let calcx = this.x;
			let calcy = this.y;
			this.x = calcx * math.cos(math.pi/50) - calcy * math.sin(math.pi/50);
			this.y = calcx * math.sin(math.pi/50) + calcy * math.cos(math.pi/50);
			this.e1 = rotVectorZ(this.e1);

			this.e2 = rotVectorZ(this.e2);

			this.e3 = rotVectorZ(this.e3);

			this.angle = extround(this.angle + 3.6, 10);
			this.rotationstep = extround(this.rotationstep + 0.04, 100);
		}else {
			let calcx = this.x;
			let calcy = this.y;
			this.x = round(calcx * math.cos(math.pi/50) - calcy * math.sin(math.pi/50));
			this.y = round(calcx * math.sin(math.pi/50) + calcy * math.cos(math.pi/50));

			this.rotationstep = 0;
			this.rotate = 0;
			this.angle = 0;

			this.e1[0] = round(this.e1[0]);
			this.e1[1] = round(this.e1[1]);
			this.e1[2] = round(this.e1[2]);
			this.e2[0] = round(this.e2[0]);
			this.e2[1] = round(this.e2[1]);
			this.e2[2] = round(this.e2[2]);
			this.e3[0] = round(this.e3[0]);
			this.e3[1] = round(this.e3[1]);
			this.e3[2] = round(this.e3[2]);



		}

	}

	if(this.rotate == 4) {
		if(this.rotationstep != 1) {
			let calcy = this.y;
			let calcz = this.z;
			this.y = calcy * math.cos(-math.pi/50) - calcz * math.sin(-math.pi/50);
			this.z = calcy * math.sin(-math.pi/50) + calcz * math.cos(-math.pi/50);

			this.e1 = rotVectorXb(this.e1);

			this.e2 = rotVectorXb(this.e2);

			this.e3 = rotVectorXb(this.e3);


			this.angle = extround(this.angle + 3.6, 10);
			this.rotationstep = extround(this.rotationstep + 0.04, 100);
		}else {
			let calcy = this.y;
			let calcz = this.z;
			this.y = round(calcy * math.cos(-math.pi/50) - calcz * math.sin(-math.pi/50));
			this.z = round(calcy * math.sin(-math.pi/50) + calcz * math.cos(-math.pi/50));
			this.rotationstep = 0;
			this.rotate = 0;
			this.angle = 0;

			this.e1[0] = round(this.e1[0]);
			this.e1[1] = round(this.e1[1]);
			this.e1[2] = round(this.e1[2]);
			this.e2[0] = round(this.e2[0]);
			this.e2[1] = round(this.e2[1]);
			this.e2[2] = round(this.e2[2]);
			this.e3[0] = round(this.e3[0]);
			this.e3[1] = round(this.e3[1]);
			this.e3[2] = round(this.e3[2]);


		}
	}


	if(this.rotate == 5) {
		if(this.rotationstep != 1) {
			let calcx = this.x;
			let calcz = this.z;
			this.x = calcx * math.cos(-math.pi/50) - calcz * math.sin(-math.pi/50);
			this.z = calcx * math.sin(-math.pi/50) + calcz * math.cos(-math.pi/50);

			this.e1 = rotVectorYb(this.e1);

			this.e2 = rotVectorYb(this.e2);

			this.e3 = rotVectorYb(this.e3);

			this.angle = extround(this.angle + 3.6, 10);
			this.rotationstep = extround(this.rotationstep + 0.04, 100);
		}else {
			let calcx = this.x;
			let calcz = this.z;
			this.x = round(calcx * math.cos(-math.pi/50) - calcz * math.sin(-math.pi/50));
			this.z = round(calcx * math.sin(-math.pi/50) + calcz * math.cos(-math.pi/50));
			this.rotationstep = 0;
			this.rotate = 0;
			this.angle = 0;

			this.e1[0] = round(this.e1[0]);
			this.e1[1] = round(this.e1[1]);
			this.e1[2] = round(this.e1[2]);
			this.e2[0] = round(this.e2[0]);
			this.e2[1] = round(this.e2[1]);
			this.e2[2] = round(this.e2[2]);
			this.e3[0] = round(this.e3[0]);
			this.e3[1] = round(this.e3[1]);
			this.e3[2] = round(this.e3[2]);

		}
	}

	if(this.rotate == 6) {
		if (this.rotationstep !=1) {
			let calcx = this.x;
			let calcy = this.y;
			this.x = calcx * math.cos(-math.pi/50) - calcy * math.sin(-math.pi/50);
			this.y = calcx * math.sin(-math.pi/50) + calcy * math.cos(-math.pi/50);
			this.e1 = rotVectorZb(this.e1);

			this.e2 = rotVectorZb(this.e2);

			this.e3 = rotVectorZb(this.e3);

			this.angle = extround(this.angle + 3.6, 10);
			this.rotationstep = extround(this.rotationstep + 0.04, 100);
		}else {
			let calcx = this.x;
			let calcy = this.y;
			this.x = round(calcx * math.cos(-math.pi/50) - calcy * math.sin(-math.pi/50));
			this.y = round(calcx * math.sin(-math.pi/50) + calcy * math.cos(-math.pi/50));

			this.rotationstep = 0;
			this.rotate = 0;
			this.angle = 0;

			this.e1[0] = round(this.e1[0]);
			this.e1[1] = round(this.e1[1]);
			this.e1[2] = round(this.e1[2]);
			this.e2[0] = round(this.e2[0]);
			this.e2[1] = round(this.e2[1]);
			this.e2[2] = round(this.e2[2]);
			this.e3[0] = round(this.e3[0]);
			this.e3[1] = round(this.e3[1]);
			this.e3[2] = round(this.e3[2]);



		}

	}





		push();

		translate(this.x-(this.e1[0]+this.e2[0]+this.e3[0])/2 ,this.y-(this.e1[1]+this.e2[1]+this.e3[1])/2 ,this.z-(this.e1[2]+this.e2[2]+this.e3[2])/2);
		beginShape();

		fill(0,255,0);
		vertex(0,0,0);
		vertex(this.e1[0],this.e1[1],this.e1[2]);
		vertex(this.e1[0] + this.e2[0] ,this.e1[1] + this.e2[1],this.e1[2] + this.e2[2]);
		vertex(this.e2[0],this.e2[1],this.e2[2]);
		endShape();

		beginShape();
		fill(0,0,255);
		vertex(this.e3[0],this.e3[1],this.e3[2]);
		vertex(this.e1[0] + this.e3[0],this.e1[1] + this.e3[1] ,this.e1[2] + this.e3[2]);
		vertex(this.e1[0] + this.e2[0] + this.e3[0], this.e1[1] + this.e2[1] + this.e3[1],this.e1[2] + this.e2[2] + this.e3[2]);
		vertex(this.e2[0] + this.e3[0],this.e2[1] + this.e3[1],this.e2[2] + this.e3[2]);
		endShape();

		beginShape();
		fill(255,255,0);
		vertex(0,0,0);
		vertex(this.e1[0],this.e1[1],this.e1[2]);
		vertex(this.e1[0] + this.e3[0], this.e1[1] + this.e3[1], this.e1[2]+ this.e3[2]);
		vertex(this.e3[0],this.e3[1],this.e3[2]);
		endShape();

		beginShape();
		fill(255);
		vertex(this.e2[0], this.e2[1], this.e2[2]);
		vertex(this.e1[0] + this.e2[0],this.e1[1] + this.e2[1], this.e1[2] + this.e2[2]);
		vertex(this.e1[0]+ this.e3[0] + this.e2[0], this.e1[1] + this.e3[1] + this.e2[1], this.e1[2] + this.e3[2] + this.e2[2]);
		vertex(this.e3[0]+ this.e2[0],this.e3[1] + this.e2[1],this.e3[2] + this.e2[2]);
		endShape();

		beginShape();
		fill(255,165,0);
		vertex(0,0,0);
		vertex(this.e2[0],this.e2[1],this.e2[2]);
		vertex(this.e2[0]+ this.e3[0], this.e2[1] + this.e3[1],this.e2[2] + this.e3[2]);
		vertex(this.e3[0], this.e3[1], this.e3[2]);
		endShape();

		beginShape();
		fill(255,0,0);
		vertex(this.e1[0], this.e1[1], this.e1[2]);
		vertex(this.e2[0] + this.e1[0],this.e2[1] + this.e1[1], this.e2[2] + this.e1[2]);
		vertex(this.e2[0] + this.e3[0] + this.e1[0], this.e2[1] + this.e3[1] + this.e1[1],this.e2[2] + this.e3[2] + this.e1[2]);
		vertex(this.e3[0] + this.e1[0], this.e3[1] + this.e1[1], this.e3[2] + this.e1[2]);
		endShape();

		pop();

  }
}
