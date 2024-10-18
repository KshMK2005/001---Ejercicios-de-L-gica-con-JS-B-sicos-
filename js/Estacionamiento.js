alert("Ingrese el tiempo en minutos");

function calcularCostoEstacionamiento(horas) {
    let costo;

    if (horas < 0.5) {
        costo = 0; 
    } else if (horas >= 0.5 && horas < 2) {
        costo = 10; 
    } else if (horas >= 2 && horas < 3) {
        costo = horas * 25; 
    } else {
        costo = horas * 30; 
    }

    return costo;
}

function iniciarSistemaEstacionamiento() {
    const minutosEstacionados = parseFloat(prompt("Ingrese el número de minutos que utilizó el estacionamiento:"));

 
    if (isNaN(minutosEstacionados) || minutosEstacionados < 0) {
        alert("Por favor, ingrese un número válido de minutos.");
    } else {
        const horasEstacionadas = minutosEstacionados / 60; // Convertimos los minutos a horas
        const costo = calcularCostoEstacionamiento(horasEstacionadas);
        alert(`El costo total por ${minutosEstacionados} minutos (${horasEstacionadas.toFixed(2)} horas) de estacionamiento es: $${costo}`);
    
    }}

a
iniciarSistemaEstacionamiento();
