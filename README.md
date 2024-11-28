# Simulador de Cajas Registradoras

Este proyecto es un simulador de **cajas registradoras** para representar el funcionamiento de tres cajas de manera independiente. Está desarrollado utilizando **HTML**, **CSS**, **JavaScript** y **Web Workers** para manejar los cálculos en segundo plano sin bloquear la interfaz de usuario.

### Requisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js**: Versión 12 o superior. Si no lo tienes instalado, puedes descargarlo desde [aquí](https://nodejs.org/).
- **Git**: Para clonar el repositorio. Puedes instalarlo desde [aquí](https://git-scm.com/).

### Descripción

Este proyecto simula el funcionamiento de **tres cajas registradoras**. Cada caja tiene su propia lista de productos y se calcula el total de cada caja de manera independiente. La aplicación utiliza **Web Workers** para realizar los cálculos en segundo plano, asegurando que la interfaz de usuario no se congele durante las operaciones.

### Funcionalidad

1. **Simulación de tres cajas registradoras**: El proyecto permite simular tres cajas registradoras de manera independiente.
2. **Cálculos eficientes**: Los cálculos del total de cada caja se realizan en segundo plano utilizando **Web Workers** para no bloquear la interfaz de usuario.
3. **Interfaz sencilla**: La interfaz es limpia y fácil de usar para interactuar con las tres cajas simuladas.

### Pasos para ejecutar el proyecto en tu máquina

Sigue estos pasos para poner en funcionamiento el simulador de cajas registradoras en tu máquina local:

1. **Clona el repositorio**:

   Abre tu terminal o línea de comandos y ejecuta el siguiente comando para clonar el repositorio:

   ```bash
   git clone https://github.com/JoseYars/simulador_cajasRegistradoras.git
   ```

2. **Accede al directorio del proyecto**:

   Cambia al directorio del proyecto clonado:

   ```bash
   cd simulador_cajasRegistradoras
   ```

3. **Instala las dependencias**:

   Asegúrate de tener **Node.js** instalado en tu máquina. Luego, instala las dependencias del proyecto ejecutando el siguiente comando en el directorio del proyecto:

   ```bash
   npm install
   ```

4. **Ejecuta el servidor**:

   Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar el servidor:

   ```bash
   npm start
   ```

   El servidor debería iniciarse y podrás acceder al simulador desde tu navegador en:

   ```
   http://localhost:3000
   ```

5. **Verifica que todo esté funcionando**:

   Al abrir la URL en tu navegador, deberías ver la interfaz del simulador de cajas registradoras. Podrás interactuar con las tres cajas y ver cómo se calculan sus totales.

### Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
/simulador_cajasRegistradoras
  ├── /public
  │   ├── index.html        # Archivo principal HTML
  │   ├── style.css        # Archivo de estilos CSS
  │   └── script.js        # Lógica de JavaScript para la interacción con el usuario
  ├── server.js            # Configuración del servidor Node.js
  ├── worker.js            # Web Worker que realiza el cálculo de los totales
  ├── package.json         # Dependencias y configuración del proyecto
  └── .gitignore           # Archivos y directorios a ignorar en Git
```

### Descripción de los Archivos Principales

1. **`server.js`**: Este archivo configura el servidor con **Express** y sirve los archivos estáticos necesarios para ejecutar el simulador en el navegador.
2. **`worker.js`**: Un **Web Worker** que maneja el cálculo de los totales de las tres cajas registradoras, asegurando que la interfaz de usuario no se congele.
3. **`index.html`**: El archivo HTML que contiene la estructura de la página y la interfaz para simular las tres cajas registradoras.
4. **`style.css`**: El archivo de estilos que da formato a la página y la hace visualmente atractiva.
5. **`script.js`**: La lógica JavaScript que se encarga de interactuar con las cajas y comunicarse con el **Web Worker** para actualizar los totales.

