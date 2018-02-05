/* 
Francheska Guzman
CodeBridge Cycle 2 Cohort 4
March 16, 2017 
*/

/* Functions Boo1, Boo2 and Boo3 moves ghosts near the hunting house
and disappear (using opacity 0). The objective is look like they are 
get into the house. */
function Boo1() {
	var boo = document.getElementById("firstGhost");
	var pos = 0;
	var id = setInterval(frame, 9);

	boo.style.display = "block";

	function frame() {
		if (pos == 650) {
			clearInterval(id);
			boo.style.opacity = "0.0";
			boo.style.transition = "5s";
		}
		else {
			pos++;
			boo.style.right = pos + 'px';
			boo.style.left = pos + 'px';
		}
	}
}

function Boo2() {
	var boo = document.getElementById("secondGhost");
	var house = document.getElementById("house");
	var pos = -700;
	var id = setInterval(frame, 9);

	boo.style.display = "block";

	function frame() {
		if (pos == 400) {
			clearInterval(id);
			boo.style.opacity = "0.0";
			boo.style.transition = "0.5s";
			house.style.backgroundImage = "url('images/bg2.jpg')";
			iceCream1();
			iceCream2();
			iceCream3();
		}
		else {
			pos++;
			boo.style.left = pos + 'px';
			boo.style.right = pos + 'px';
		}
	}
}

function Boo3() {
	var boo = document.getElementById("thirdGhost");
	var pos = -400;
	var id = setInterval(frame, 9);

	boo.style.display = "block";

	function frame() {
		if (pos == 100) {
			clearInterval(id);
			boo.style.opacity = "0.0";
			boo.style.transition = "5s";
		}
		else {
			pos++;
			boo.style.right = pos + 'px';
			boo.style.top= pos + 'px';
		}
	}
}

/* Functions iceCream1, iceCream2 and iceCream3 move the icecream from the
freezer to the center of the page.  The ghosts (we can't see them)
are eating icecream. */
function iceCream1() {
	document.getElementById("icecream1").style.opacity = "1";
	document.getElementById("icecream1").style.transition = "3s";

	var icecream = document.getElementById("icecream1");
	var pos = 0;
	var id = setInterval(frame, 9);

	icecream.style.display = "block";

	function frame() {
		if (pos == 150) {
			clearInterval(id);
			icecream.style.opacity = "0.0";
			icecream.style.transition = "10s";
		}
		else {
			pos++;
			icecream.style.right = pos + 'px';
			icecream.style.left = pos + 'px';
		}
	}
}

function iceCream2() {
	document.getElementById("icecream2").style.opacity = "1";
	document.getElementById("icecream2").style.transition = "3s";

	var icecream = document.getElementById("icecream2");
	var pos = 250;
	var id = setInterval(frame, 9);

	icecream.style.display = "block";

	function frame() {
		if (pos == 550) {
			clearInterval(id);
			icecream.style.opacity = "0.0";
			icecream.style.transition = "10s";
		}
		else {
			pos++;
			icecream.style.right = pos + 'px';
			icecream.style.left = pos + 'px';
		}
	}
}

function iceCream3() {
	document.getElementById("icecream3").style.opacity = "1";
	document.getElementById("icecream3").style.transition = "3s";

	var icecream = document.getElementById("icecream3");
	var pos = 600;
	var id = setInterval(frame, 9);

	icecream.style.display = "block";

	function frame() {
		if (pos == 800) {
			clearInterval(id);
			icecream.style.opacity = "0.0";
			icecream.style.transition = "10s";
			cat1();
			/* I call the function cat1, so the cat get into the
			kitchen and watch the ghosts eating icecreams. */
		}
		else {
			pos++;
			icecream.style.right = pos + 'px';
			icecream.style.left = pos + 'px';
		}
	}
}

function cat1() {
	document.getElementById("cat").style.opacity = "1";

	var cat = document.getElementById("cat");
	var pos = 0;
	var id = setInterval(frame, 9);

	cat.style.display = "block";

	function frame() {
		if (pos == 50) {
			meow.play();
			clearInterval(id);
		}
		else {
			pos++;
			cat.style.right = pos + 'px';
			cat.style.left = pos + 'px';
		}
	}

	setTimeout(function() {
		ending();
	}, 1 * 10000)
}

function Boo4() {
	document.getElementById("firstGhost").style.opacity = "1";
	document.getElementById("firstGhost").style.transition = "5s";

	var boo = document.getElementById("firstGhost");
	var pos = 200;
	var id = setInterval(frame, 9);

	function frame() {
		if (pos == 200) {
			clearInterval(id);
		}
		else {
			pos++;
			boo.style.right = pos + 'px';
			boo.style.left = pos + 'px';
		}
	}
}

function Boo5() {
	document.getElementById("secondGhost").style.opacity = "1";
	document.getElementById("secondGhost").style.transition = "5s";

	var boo = document.getElementById("secondGhost");
	var pos = 0;
	var id = setInterval(frame, 9);

	function frame() {
		if (pos == 100) {
			clearInterval(id);
		}
		else {
			pos++;
			boo.style.left = pos + 'px';
			boo.style.right = pos + 'px';
		}
	}
}

function Boo6() {
	document.getElementById("thirdGhost").style.opacity = "1";
	document.getElementById("thirdGhost").style.transition = "5s";

	var boo = document.getElementById("thirdGhost");
	var pos = 0;
	var id = setInterval(frame, 9);

	function frame() {
		if (pos == 200) {
			clearInterval(id);
		}
		else {
			pos++;
			boo.style.right = pos + 'px';
			boo.style.top= pos + 'px';
		}
	}
}

function cat2() {
	document.getElementById("cat").style.opacity = "1";

	var cat = document.getElementById("cat");
	var pos = 300;
	var id = setInterval(frame, 9);

	cat.style.display = "block";

	function frame() {
		if (pos == 400) {
			clearInterval(id);
			/* Call the function fan and Boo7, Boo8 and Boo9. The fan
			move away the three ghosts. */
			fan();
			Boo7();
			Boo8();
			Boo9();
		}
		else {
			pos++;
			cat.style.bottom = pos + 'px';
			cat.style.top = pos + 'px';
		}
	}
}

function fan() {
	var fan = document.getElementById("fan");

	fan.style.display = "block";
	fan.style.opacity = "1";

	setTimeout(function() {
		var title = document.getElementById("title");

		title.innerHTML = 'The End... <a href="https://francheska-guzman.github.io/haunted-house/">Watch Again</a>!';
	}, 1 * 18000)
}

function Boo7() {
	var boo = document.getElementById("firstGhost");
	var pos = 500;
	var id = setInterval(frame, 9);

	boo.style.top = "0px";

	function frame() {
		if (pos == 1400) {
			clearInterval(id);
		}
		else {
			pos++;
			boo.style.left = pos + 'px';
			boo.style.right = pos + 'px';
		}
	}
}

function Boo8() {
	var boo = document.getElementById("secondGhost");
	var pos = 0;
	var id = setInterval(frame, 9);

	boo.style.top = "100px";

	function frame() {
		if (pos == 1700) {
			clearInterval(id);
		}
		else {
			pos++;
			boo.style.left = pos + 'px';
			boo.style.right = pos + 'px';
		}
	}
}

function Boo9() {
	var boo = document.getElementById("thirdGhost");
	var pos = 900;
	var id = setInterval(frame, 9);

	function frame() {
		if (pos == 1500) {
			clearInterval(id);
		}
		else {
			pos++;
			boo.style.left = pos + 'px';
			boo.style.right = pos + 'px';
		}
	}
}

function beginning() {
	music.play();
	document.getElementById("house").style.backgroundImage = "url('images/bg1.jpg')";
	document.getElementById("cat").style.opacity = "0.0";
	document.getElementById("icecream1").style.opacity = "0.0";
	document.getElementById("icecream2").style.opacity = "0.0";
	document.getElementById("icecream3").style.opacity = "0.0";
	document.getElementById("fan").style.opacity = "0.0";
	Boo1();
	Boo2();
	Boo3();
}

function ending() {
	document.getElementById("house").style.backgroundImage = "url('images/bg3.jpeg')";
	Boo4();
	Boo5();
	Boo6();
	cat2();
}

/* Cat sound effect */
var meow = new Audio ('audio/cat.mp3');
meow.loop = false;

/* The Addam's (Francheska's) Family */
var music = new Audio ('audio/the-addams-i-mean-francheskas-family-theme-song.mp3');
music.loop = false;