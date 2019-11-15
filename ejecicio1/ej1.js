var saldoActual = 0;
var nroCuenta = 0;
var saldoTotal = 0;
var nombre = "";

nroCuenta = parseInt(window.prompt("Ingresar numero de cuenta"));
while (nroCuenta > 0) {
    nombre = window.prompt("Ingresar Nombre");
    saldoActual = parseInt(window.prompt("Saldo acutal"));

    if (saldoActual > 0) {
        document.write("Número de cuenta:<br> " + nroCuenta + "<br>");
        saldoTotal += saldoActual;
        document.write("Estado de cuenta: ACREEDOR<br>");
    } else {
        if (saldoActual < 0) {
            document.write("Número de cuenta:<br>" + nroCuenta + "<br>");
            document.write("Estado de cuenta: DEUDOR<br>");
        } else {
            document.write("Número de cuenta:<br> " + nroCuenta + "<br>");
            document.write("Estado de cuenta: NULO<br>");
        }
    }
    nroCuenta = parseInt(window.prompt("Ingresar numero de cuenta"));
}
document.write("Saldo Total: " + saldoTotal);