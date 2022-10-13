function double() {
    const inputNumber = document.getElementById("age").value;
    document.getElementById("age").value = inputNumber * 2;
    document.getElementById("output").innerHTML = inputNumber * 2;
}