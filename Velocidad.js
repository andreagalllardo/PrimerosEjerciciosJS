//Reciba la velocidad y la distancia que tiene que recorrer un carro y entrega cuánto tiempo le tomaría recorrer esa distancia.
function tiempo() {
    let velocidad = prompt("Cual es la velocidad recorrida?");
    let distancia = prompt("Cual es la distancia recorrida?")
    alert(`El tiempo necesario es, ${distancia/velocidad} horas`);
  }
  
  tiempo();