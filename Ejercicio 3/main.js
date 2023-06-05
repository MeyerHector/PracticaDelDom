const btn = document.getElementById("btn");

function calcularResultado() {
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const operation = document.getElementById("operacion").value;

    let resultado = 0;

    switch (operation) {
        case "Suma":
            resultado = number1 + number2;
            break;
        case "Resta":
            resultado = number1 - number2;
            break;
        case "Multiplicación":
            resultado = number1 * number2;
            break;
        case "División":
            resultado = number1 / number2;
            break;
    }

    document.getElementById("resultado").value = resultado;
}

btn.addEventListener("click", calcularResultado);







