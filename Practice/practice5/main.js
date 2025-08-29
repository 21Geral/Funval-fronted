let figura = parseInt(prompt(`Escoge la figura geométrica a calcular ☺️
    
    1. El área de un cuadrado 🗾​
    2. El área de un rectángulo ✉️​.
    3. El área de un triángulo. ​📐​`))


    function valores(figura) {
  if (figura === 1) {
    let lado = parseInt(prompt(`Ingresa el valor del lado del cuadrado `));
    if (lado <= 0 || isNaN(lado)) {
      alert("El valor ingresado no es válido 🤨​");
      return; 
    }
    let area = lado * lado;
    alert(`El área del cuadrado es: ${area} 🤓`);
  } else if (figura === 2) {
    let altura = parseInt(prompt(`Ingresa el valor de la altura:`));
    let base = parseInt(prompt(`Ingresa el valor de la base:`));
    if (altura <= 0 || base <= 0 || isNaN(altura) || isNaN(base)) {
      alert("Los valores ingresados no son válidos 🤨​");
      return;
    }
    let area = altura * base;
    alert(`El área del rectángulo es: ${area} 🤓`);
  } else if (figura === 3) {
    let altura = parseInt(prompt(`Ingresa el valor de la altura:`));
    let base = parseInt(prompt(`Ingresa el valor de la base:`));
    if (altura <= 0 || base <= 0 || isNaN(altura) || isNaN(base)) {
      alert("Los valores ingresados no son válidos 🤨​");
      return;
    }
    let area = (altura * base) / 2;
    alert(`El área del triángulo es: ${area} 🤓`);
  } else {
    alert("Opción no válida 🤨​");
  }
}

valores(figura);