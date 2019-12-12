var negativos = 0;
var positivos = 0;
var ceros = 0;
var pares = 0;
var impares = 0;
var total = 0;

function esPar(num, si) {
    if (num % 2 == 0) {
        return si = true;
    } else {
        return si = false;
    }
}

function calcularPorc(total, dato) {
    return (dato * 100) / total;
}

for (i = 0; i < 10; i++) {
    num = parseInt(window.prompt("Ingresar numero:"));
    if (num < 0) {
        negativos += 1;
    } else {
        if (num > 0) {
            positivos += 1;
        } else {
            ceros += 1
        }
    }
    if (esPar(num)) {
        pares += 1
        total += pares;
    } else {
        impares += 1;
        total += impares;
    }
}
porcentajePares = calcularPorc(total, pares);
porcentajeImpares = calcularPorc(total, impares);
document.write("Negativos: " + negativos + "<br>");
document.write("Positivos: " + positivos + "<br>");
document.write("Ceros: " + ceros + "<br>");
document.write("Pares: " + pares + " Porcentaje: " + porcentajePares + "<br>");
document.write("Impares: " + impares + " Porcentaje: " + porcentajeImpares + "<br>");