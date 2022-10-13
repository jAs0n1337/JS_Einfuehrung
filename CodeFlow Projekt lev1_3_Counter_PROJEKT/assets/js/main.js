let curNum = 0;
document.getElementById("output").innerHTML = curNum;

function minusOne() {
    curNum -= 1;
    document.getElementById("output").innerHTML = curNum;
}
function plusOne() {
    curNum += 1;
    document.getElementById("output").innerHTML = curNum;
}
function minusTen() {
    curNum -= 10;
    document.getElementById("output").innerHTML = curNum;
}
function plusTen() {
    curNum += 10;
    document.getElementById("output").innerHTML = curNum;
}
function minusHundred() {
    curNum -= 100;
    document.getElementById("output").innerHTML = curNum;
}
function plusHundred() {
    curNum += 100;
    document.getElementById("output").innerHTML = curNum;
}
function wtf() {
    curNum = 0;
    document.getElementById("output").innerHTML = curNum;
}
function double() {
    curNum = curNum * 2;
    document.getElementById("output").innerHTML = curNum;
}