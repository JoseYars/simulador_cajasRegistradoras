const NUM_CAJAS = 3;
let workers = [];
let intervalId;

// Referencias al DOM
const cajasDiv = document.getElementById("cajas");
const startButton = document.getElementById("startSimulation");
const stopButton = document.getElementById("stopSimulation");

// Crear cajas en el DOM
for (let i = 0; i < NUM_CAJAS; i++) {
  const caja = document.createElement("div");
  caja.classList.add("caja");
  caja.textContent = `Caja ${i + 1}`;
  caja.id = `caja-${i}`;
  cajasDiv.appendChild(caja);

  // Crear un Web Worker para cada caja
  const worker = new Worker("worker.js");

  // Escuchar mensajes del Worker
  worker.onmessage = (event) => {
    const { clienteId, status } = event.data;
    const cajaDiv = document.getElementById(`caja-${i}`);
    cajaDiv.textContent = `Caja ${i + 1} - Libre`;
    cajaDiv.style.backgroundColor = "#2196F3";
  };

  workers.push(worker);
}

// Función para iniciar la simulación
function startSimulation() {
  startButton.disabled = true;
  stopButton.disabled = false;

  let clienteId = 1;

  intervalId = setInterval(() => {
    const cajaId = Math.floor(Math.random() * NUM_CAJAS); // Caja aleatoria
    const tiempoAtencion = Math.random() * 2000 + 1000; // Tiempo aleatorio entre 1-3 segundos

    const cajaDiv = document.getElementById(`caja-${cajaId}`);
    cajaDiv.textContent = `Caja ${cajaId + 1} - Atendiendo Cliente ${clienteId}`;
    cajaDiv.style.backgroundColor = "#FF9800";

    // Enviar tarea al Worker
    workers[cajaId].postMessage({ clienteId, tiempoAtencion });

    clienteId++;
  }, Math.random() * 2000 + 1000);
}

// Función para detener la simulación
function stopSimulation() {
  clearInterval(intervalId);
  startButton.disabled = false;
  stopButton.disabled = true;

  for (let i = 0; i < NUM_CAJAS; i++) {
    const cajaDiv = document.getElementById(`caja-${i}`);
    cajaDiv.textContent = `Caja ${i + 1}`;
    cajaDiv.style.backgroundColor = "#2196F3";
  }
}

// Asignar eventos a los botones
startButton.addEventListener("click", startSimulation);
stopButton.addEventListener("click", stopSimulation);
