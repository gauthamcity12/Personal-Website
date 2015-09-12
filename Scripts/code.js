function fillRect(){
	var pg = document.getElementById("rect");
	pg.style.borderColor = "blue";
	//pg.style.background-color = "black";
}

function revert(){
	var pg = document.getElementById("rect");
	pg.style.borderColor = "orange";
}

//document.getElementById("rect").onmouseover = function() {fillRect()};
//document.getElementById("rect").onmouseout = function() {revert()};
