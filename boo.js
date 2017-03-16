function Out() {
	document.getElementById("house").style.backgroundImage = "url('images/bg1.jpg')";
}

function Boo1() {
	var elem = document.getElementById("firstGhost");
	var pos = 0;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 700) {
			clearInterval(id);
			document.getElementById("firstGhost").style.opacity = "0.0";
			document.getElementById("firstGhost").style.transition = "5s";
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
		if (pos == 400) {
			clearInterval(id);
			document.getElementById("secondGhost").style.opacity = "0.0";
			document.getElementById("secondGhost").style.transition = "1s";
			In();
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
		if (pos == 200) {
			clearInterval(id);
			document.getElementById("thirdGhost").style.opacity = "0.0";
			document.getElementById("thirdGhost").style.transition = "5s";
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.top= pos + 'px';
		}
	}
}

function In(){
	document.getElementById("house").style.backgroundImage = "url('images/bg2.jpeg')";
	Boo4();
	Boo5();
	Boo6();
}