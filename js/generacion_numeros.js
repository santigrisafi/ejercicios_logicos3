function generarNumeros() {
  let numeroAleatorio = Math.floor(Math.random() * (1 - 0 + 1) + 0);
  Number(numeroAleatorio);
  alert(numeroAleatorio);
  numeroAleatorio = Math.floor(Math.random() * (75 - 25 + 1) + 25);
  alert(numeroAleatorio);
}

function generarNumeros2() {
  let numeroAleatorio = Math.floor(Math.random() * (7.0 - 5.0 + 1) + 5.0);
  parseFloat(numeroAleatorio);
  alert("Numero Aleatorio: " + numeroAleatorio);
}
