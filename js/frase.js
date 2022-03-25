function TomarFrase() {
  let frase = prompt("Ingrese la frase");
  let letras = [""];
  for (let i = 0; i < frase.length; i++) {
    let char = frase.charAt(i).toLowerCase();
    switch (char) {
      case "a":
        letras.push(["a"]);
        break;
      case "e":
        letras.push(["e"]);
        break;
      case "i":
        letras.push(["i"]);
        break;
      case "o":
        letras.push(["o"]);
        break;
      default:
        letras.push();
        break;
    }
    alert(letras);
  }
}
