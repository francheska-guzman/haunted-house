function Boo1() {
	var elem = document.getElementById("firstGhost");
	var pos = -250;
	var id = setInterval(frame, 20)

	function frame() {
		if (pos == 50) {
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
	var pos = 400;
	var id = setInterval(frame, 1)

	function frame() {
		if (pos == 1500) {
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
	var pos = 100;
	var id = setInterval(frame, 10)

	function frame() {
		if (pos == 200) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.left = pos + 'px';
			elem.style.right = pos + 'px';
		}
	}
}

function background2() {
	document.getElementById("house").style.backgroundImage = "url('images/bg2.jpg')";
}

function background3() {
	document.getElementById("house").style.backgroundImage = "url('images/bg3.jpg')";
}