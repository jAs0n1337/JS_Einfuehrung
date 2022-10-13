// Fortschrittliche Methode
// function ergebnis() {
//     const inputNum = document.getElementById("age");
//     const currentYear = 2022;
//     document.getElementById("output").innerHTML = currentYear - inputNum.value;
//     inputNum.value = currentYear - inputNum.value;
// }

function ergebnis() {
    const inputNum = document.getElementById("age").value;
    const currentYear = 2022
    document.getElementById("age").value = currentYear - inputNum;
    document.getElementById("output").innerHTML = currentYear - inputNum;
}


