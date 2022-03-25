function calcularSueldos() {
  alert("Bienvenidos al sistema de salarios de la despensa Los Simpsons");
  alert(
    "Aqui calcularemos los sueldos de los empleados, por favor elija una categoria del listado"
  );
  alert("Ingrese 1- Para repositor, 2-Para Cajero, 3-Para supervisor");
  let categoria = prompt("Ingrese la categoria del empleado");
  parseInt(categoria);
  switch (Number(categoria)) {
    case 1:
      let sueldo_basico = 15.89;
      let sueldo_neto = sueldo_basico + (sueldo_basico * 10) / 100;
      alert("Sueldo Neto para los repositores " + sueldo_neto);
      break;
    case 2:
      let sueldo_fijo = 25630.89;
      alert("Sueldo Neto para los cajeros " + sueldo_fijo);
      break;
    case 3:
      let sueldo_bruto = 35560.2;
      let sueldo_neto2 = sueldo_bruto - (sueldo_bruto * 11) / 100;
      alert("Sueldo Neto para los supervisores es de " + sueldo_neto2);
      break;
    default:
      alert("No ha seleccionado ninguna categoria");
      break;
  }
}
