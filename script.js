function calculaFactorial() {
    var numero = document.getElementById("input").value;
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
        factorial = factorial * i;
    }
    document.getElementById("resultado").innerHTML = "El factorial de "+numero+" es: "+factorial;
}