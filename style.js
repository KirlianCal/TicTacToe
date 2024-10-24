function startGame() {
  var sq1C = document.getElementById("1").clicked;
  var sq2C = document.getElementById("2").clicked;
  var sq3C = document.getElementById("3").clicked;
  var sq4C = document.getElementById("4").clicked;
  var sq5C = document.getElementById("5").clicked;
  var sq6C = document.getElementById("6").clicked;
  var sq7C = document.getElementById("7").clicked;
  var sq8C = document.getElementById("8").clicked;
  var sq9C = document.getElementById("9").clicked;
}

var sq1 = document.getElementById("1");
var sq2 = document.getElementById("2");
var sq3 = document.getElementById("3");
var sq4 = document.getElementById("4");
var sq5 = document.getElementById("5");
var sq6 = document.getElementById("6");
var sq7 = document.getElementById("7");
var sq8 = document.getElementById("8");
var sq9 = document.getElementById("9");

let buttons = document.getElementsByClassName("btn");

marker = 1;
function b1() {
  if (marker == 1) {
    document.getElementById(1).innerHTML = "X";
    document.getElementById(1).disabled = true;

    marker = 0;
  } else {
    document.getElementById(1).innerHTML = "O";
    document.getElementById(1).disabled = true;

    marker = 1;
  }
}

function b2() {
  if (marker == 1) {
    document.getElementById(2).innerHTML = "X";
    document.getElementById(2).disabled = true;

    marker = 0;
  } else {
    document.getElementById(2).innerHTML = "O";
    document.getElementById(2).disabled = true;

    marker = 1;
  }
}

function b3() {
  if (marker == 1) {
    document.getElementById(3).innerHTML = "X";
    document.getElementById(3).disabled = true;

    marker = 0;
  } else {
    document.getElementById(3).innerHTML = "O";
    document.getElementById(3).disabled = true;

    marker = 1;
  }
}

function b4() {
  if (marker == 1) {
    document.getElementById(4).innerHTML = "X";
    document.getElementById(4).disabled = true;

    marker = 0;
  } else {
    document.getElementById(4).innerHTML = "O";
    document.getElementById(4).disabled = true;

    marker = 1;
  }
}

function b5() {
  if (marker == 1) {
    document.getElementById(5).innerHTML = "X";
    document.getElementById(5).disabled = true;

    marker = 0;
  } else {
    document.getElementById(5).innerHTML = "O";
    document.getElementById(5).disabled = true;

    marker = 1;
  }
}

function b6() {
  if (marker == 1) {
    document.getElementById(6).innerHTML = "X";
    document.getElementById(6).disabled = true;

    marker = 0;
  } else {
    document.getElementById(6).innerHTML = "O";
    document.getElementById(6).disabled = true;

    marker = 1;
  }
}

function b7() {
  if (marker == 1) {
    document.getElementById(7).innerHTML = "X";
    document.getElementById(7).disabled = true;

    marker = 0;
  } else {
    document.getElementById(7).innerHTML = "O";
    document.getElementById(7).disabled = true;

    flag = 1;
  }
}

function b8() {
  if (marker == 1) {
    document.getElementById(8).innerHTML = "X";
    document.getElementById(8).disabled = true;

    marker = 0;
  } else {
    document.getElementById(8).innerHTML = "O";
    document.getElementById(8).disabled = true;

    marker = 1;
  }
}

function b9() {
  if (marker == 1) {
    document.getElementById(9).innerHTML = "X";
    document.getElementById(9).disabled = true;

    marker = 0;
  } else {
    document.getElementById(9).innerHTML = "O";
    document.getElementById(9).disabled = true;

    marker = 1;
  }
}
