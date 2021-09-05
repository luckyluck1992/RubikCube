
function Sleep(milliseconds) {
 return new Promise(resolve => setTimeout(resolve, milliseconds));
}


async function shuffling() {
	let moves = ["up", "upb", "down", "downb", 
				"left", "leftb", "right", "rightb", 
				"front", "frontb", "back", "backb"];
	for( let i = 0; i < 25; i++) {
		mix[i] = moves[math.floor(math.random() * 12)];
	}
	console.log(mix);
	for (let i = 0; i < mix.length; i++) {
		console.log(mix[i]);
		
		if(mix[i] === "up") {
			turnY(-1);
		}
		if(mix[i] === "upb") {
			turnYb(-1);
		}
		if(mix[i] === "down") {
			turnYb(1);
		}
		if(mix[i] === "downb") {
			turnYb(1);
		}
		if(mix[i] === "left") {
			turnXb(-1);
		}
		if(mix[i] === "leftb") {
			turnX(-1);
		}
		if(mix[i] === "right") {
			turnX(1);
		}
		if(mix[i] === "rightb") {
			turnXb(1);
		}
		if(mix[i] === "front") {
			turnZ(-1);
		}
		if(mix[i] === "frontb") {
			turnZb(-1);
		}
		if(mix[i] === "back") {
			turnZb(1);
		}
		if(mix[i] === "backb") {
			turnZ(1);
		}
		await Sleep(1200);		
	}
	console.log("suffled...");
}

async function solve() {
	console.log("start to solve...");
	
	for (let i = mix.length-1; i >= 0; i--) {
		console.log(i);
		
		if(mix[i] === "up") {
			turnYb(-1);
		}
		if(mix[i] === "upb") {
			turnY(-1);
		}
		if(mix[i] === "down") {
			turnY(1);
		}
		if(mix[i] === "downb") {
			turnY(1);
		}
		if(mix[i] === "left") {
			turnX(-1);
		}
		if(mix[i] === "leftb") {
			turnXb(-1);
		}
		if(mix[i] === "right") {
			turnXb(1);
		}
		if(mix[i] === "rightb") {
			turnX(1);
		}
		if(mix[i] === "front") {
			turnZb(-1);
		}
		if(mix[i] === "frontb") {
			turnZ(-1);
		}
		if(mix[i] === "back") {
			turnZ(1);
		}
		if(mix[i] === "backb") {
			turnZb(1);
		}		
		await Sleep(1200);
	}
}