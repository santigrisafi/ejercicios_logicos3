function calcularStock() {
  let canutillos = prompt("Ingrese cuantos canutillos quiere comprar ?");
  let mostacillas = prompt("Ingrese cuantas mostacillas quiere comprar ?");
  let cantidad = Number(canutillos) + Number(mostacillas);
  if (cantidad < 5) {
    alert("La cantidad de productos a comprar no pueden ser menores a 5");
  } else if (cantidad >= 5 && cantidad <= 15) {
    alert("El costo de envío es de $200");
  } else if (cantidad >= 5 && cantidad >= 15) {
    alert("El envío es gratuito");
  }
}
