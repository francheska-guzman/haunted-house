function Out() {
	document.getElementById("house").style.backgroundImage = "url('images/bg1.jpg')";
}

function In(){
	document.getElementById("house").style.backgroundImage = "url('images/bg2.jpeg')";
}

function Boo1() {
	var elem = document.getElementById("firstGhost");
	var pos = 0;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 600) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

function Boo2() {
	var elem = document.getElementById("secondGhost");
	var pos = -700;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 100) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.left = pos + 'px';
			elem.style.right = pos + 'px';
		}
	}
}

function Boo3() {
	var elem = document.getElementById("thirdGhost");
	var pos = -400;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == -80) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.top= pos + 'px';
		}
	}
}