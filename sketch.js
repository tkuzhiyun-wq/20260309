let posX, posY;
let clearScreen = false;
const bgColor = 100;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(bgColor);
	posX = width / 2;
	posY = height / 2;
}

function draw() {
	if (clearScreen) {
		background(bgColor);
		return;
	}

	colorMode(HSB) //色相:0-360，飽和度0-100，亮度 0-100
	fill(100 + (mouseX / 10) % 361, 100, 100);
	posX = mouseX;
	posY = mouseY;
	ellipse(posX, posY, 100, 100);
}

function keyPressed() {
	if (key === ' ' || keyCode === 32) {
		clearScreen = true;
	}
}

function mouseMoved() {
	clearScreen = false;
}

