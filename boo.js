function Boo1() {
	var elem = document.getElementById("firstGhost");
	var pos = 0;
	var id = setInterval(frame, 0.5);

	function frame() {
		if (pos == 600) {
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
			document.getElementById("secondGhost").style.transition = "0.5s";
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
		if (pos == 100) {
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

function iceCream1() {
	document.getElementById("icecream1").style.opacity = "1";
	document.getElementById("icecream1").style.transition = "1s";

	var elem = document.getElementById("icecream1");
	var pos = 0;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 100) {
			clearInterval(id);
			document.getElementById("icecream1").style.opacity = "0.0";
			document.getElementById("icecream1").style.transition = "10s";
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

function iceCream2() {
	document.getElementById("icecream2").style.opacity = "1";
	document.getElementById("icecream2").style.transition = "1s";

	var elem = document.getElementById("icecream2");
	var pos = 0;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
			document.getElementById("icecream2").style.opacity = "0.0";
			document.getElementById("icecream2").style.transition = "10s";
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}


function iceCream3() {
	document.getElementById("icecream3").style.opacity = "1";
	document.getElementById("icecream3").style.transition = "1s";

	var elem = document.getElementById("icecream3");
	var pos = 0;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
			document.getElementById("icecream3").style.opacity = "0.0";
			document.getElementById("icecream3").style.transition = "10s";
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

function cat() {
	document.getElementById("cat").style.opacity = "1";

	var elem = document.getElementById("cat");
	var pos = 200;
	var id = setInterval(frame, .5);

	function frame() {
		if (pos == 200) {
			clearInterval(id);
		}
		else {
			pos++;
			elem.style.right = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

function Run() {
	document.getElementById("house").style.backgroundImage = "url('images/bg1.jpg')";
	document.getElementById("cat").style.opacity = "0.0";
	document.getElementById("icecream1").style.opacity = "0.0";
	document.getElementById("icecream2").style.opacity = "0.0";
	Boo1();
	Boo2();
	Boo3();
}

function In() {
	document.getElementById("house").style.backgroundImage = "url('images/bg2.jpg')";
	iceCream1();
	iceCream2();
	iceCream3();
}

function End() {
	document.getElementById("house").style.backgroundImage = "url('images/bg3.jpeg')";
	cat();
	Boo4();
	Boo5();
	Boo6();
}
