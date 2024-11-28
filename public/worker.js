// Escuchar mensajes del hilo principal
self.onmessage = (event) => {
    const { clienteId, tiempoAtencion } = event.data;
  
    // Simular el tiempo de atención del cliente
    setTimeout(() => {
      self.postMessage({
        clienteId,
        status: "completado",
      });
    }, tiempoAtencion);
  };
  