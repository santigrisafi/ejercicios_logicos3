function divisiblePor2() {
  let numero = prompt("Ingrese un numero cualquiera mayor a 0");
  parseInt(numero);
  return alert(numero % 2 === 0 ? "Es divisible" : "No es divisible");
}

function divisiblePorNumeros() {
  let divisores = [2, 3, 5, 7];
  let numero = prompt("Ingrese un numero cualquiera mayor a 0");
  parseInt(numero);
  for (let divisor of divisores) {
    alert(
      numero % divisor === 0
        ? `Es Divisible por ${divisor}`
        : `No es divisible por ${divisor}`
    );
  }
}

function numerosDivisores() {
  let numero = prompt("Ingrese un numero");
  let divisores = [];
  Number(numero);
  for (let i = 0; i <= numero; i++) {
    numero % i === 0 ? divisores.push([i]) : "";
  }
  alert(divisores);
}

function numerosDivisores2() {
  let number_1 = prompt("Ingrese el valor para el numero 1");
  let number_2 = prompt("Ingrese el valor para el numero 2");
  let mcd = 0;
  Number(number_1);
  Number(number_2);
  while (number_2 !== 0) {
    mcd = number_2;
    number_2 = number_1 % number_2;
    number_1 = mcd;
  }
  alert(number_1);
}

function indicarSiEsPrimo() {
  let numero = parseInt(
    prompt("Ingrese un numero entero para saber si es o no primo")
  );
  let primo = true;
  for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
      return (primo = false);
    }
  }
  if (primo === true) {
    alert("Es primo");
  } else {
    alert("No es primo");
  }
}
