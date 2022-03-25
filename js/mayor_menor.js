function sacarMayor() {
  let numero1 = prompt("Ingrese el numero 1");
  let numero2 = prompt("Ingrese el numero 2");
  parseInt(numero1);
  parseInt(numero2);
  return alert(numero1 > numero2 ? numero1 : numero2);
}

function sacarMayor2() {
  let numero1 = prompt("Ingrese el numero 1");
  let numero2 = prompt("Ingrese el numero 2");
  let numero3 = prompt("Ingrese el numero 3");
  parseInt(numero1);
  parseInt(numero2);
  parseInt(numero3);
  if (numero1 > numero2 && numero1 > numero3) {
    return alert(numero1);
  } else if (numero2 > numero1 && numero2 > numero3) {
    return alert(numero2);
  } else if (numero3 > numero1 && numero3 > numero2) {
    return alert(numero3);
  }
}
