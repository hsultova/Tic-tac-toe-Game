var x = "X";
var o = "O";
var turn = x;
 
function doMove(field){
	 if (field.innerHTML == x || field.innerHTML == o) {
        return;
    }

	if (field.id == "Field1"){
		document.getElementById("Field1").innerHTML = turn;	
		checkVictory();
		playersTurn();		
	}
	
	if (field.id == "Field2"){
		document.getElementById("Field2").innerHTML = turn;		
		checkVictory();
		playersTurn();		
	}
	
	if (field.id == "Field3"){
		document.getElementById("Field3").innerHTML = turn;	
		checkVictory();
		playersTurn();		
	}
	
	if (field.id == "Field4"){
		document.getElementById("Field4").innerHTML = turn;		
		checkVictory();
		playersTurn();	
	}
	
	if (field.id == "Field5"){
		document.getElementById("Field5").innerHTML = turn;	
		checkVictory();
		playersTurn();	
	}
	
	if (field.id == "Field6"){
		document.getElementById("Field6").innerHTML = turn;		
		checkVictory();
		playersTurn();	
	}
	
	if (field.id == "Field7"){
		document.getElementById("Field7").innerHTML = turn;	
		checkVictory();
		playersTurn();	
	}
	
	if (field.id == "Field8"){
		document.getElementById("Field8").innerHTML = turn;		
		checkVictory();
		playersTurn();	
	}
	
	if (field.id == "Field9"){
		document.getElementById("Field9").innerHTML = turn;		
		checkVictory();
		playersTurn();	
	}
}	

function playersTurn() {
    if (turn == x) {
        turn = o;
    } else {
        turn = x;
    }
}

function checkVictory(){
	if (document.getElementById("Field1").innerHTML == turn && document.getElementById("Field2").innerHTML == turn && document.getElementById("Field3").innerHTML == turn){
	changeColor("Field1");
	changeColor("Field2");
	changeColor("Field3");
	hasWon();
	}
	else if (document.getElementById("Field4").innerHTML == turn && document.getElementById("Field5").innerHTML == turn && document.getElementById("Field6").innerHTML == turn){
	changeColor("Field4");
	changeColor("Field5");
	changeColor("Field6");
	hasWon();
	}
	else if (document.getElementById("Field7").innerHTML == turn && document.getElementById("Field8").innerHTML == turn && document.getElementById("Field9").innerHTML == turn){
	changeColor("Field7");
	changeColor("Field8");
	changeColor("Field9");
	hasWon();
	}
	else if (document.getElementById("Field1").innerHTML == turn && document.getElementById("Field4").innerHTML == turn && document.getElementById("Field7").innerHTML == turn){
	changeColor("Field1");
	changeColor("Field4");
	changeColor("Field7");
	hasWon();
	}
	else if (document.getElementById("Field2").innerHTML == turn && document.getElementById("Field5").innerHTML == turn && document.getElementById("Field8").innerHTML == turn){
	changeColor("Field2");
	changeColor("Field5");
	changeColor("Field8");
	hasWon();
	}
	else if (document.getElementById("Field3").innerHTML == turn && document.getElementById("Field6").innerHTML == turn && document.getElementById("Field9").innerHTML == turn){
	changeColor("Field3");
	changeColor("Field6");
	changeColor("Field9");
	hasWon();
	}
	else if (document.getElementById("Field1").innerHTML == turn && document.getElementById("Field5").innerHTML == turn && document.getElementById("Field9").innerHTML == turn){
	changeColor("Field1");
	changeColor("Field5");
	changeColor("Field9");
	hasWon();
	}
	else if (document.getElementById("Field3").innerHTML == turn && document.getElementById("Field5").innerHTML == turn && document.getElementById("Field7").innerHTML == turn){
	changeColor("Field3");
	changeColor("Field5");
	changeColor("Field7");
	hasWon();
	}	
}

function changeColor(field){
	document.getElementById(field).style.color = "blue";
}

function hasWon(){	
	alert("The player with " + turn + " wins");
	restartGame();	
}

function draw(){
	alert("It's a draw");
	restartGame();
}

function restartGame(){
	location.reload();
}

