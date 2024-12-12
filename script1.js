document.querySelectorAll('.flip-container').forEach(container => {
    container.addEventListener('click', () => {
        container.classList.toggle('active'); // Activa/desactiva el giro
    });
});

//Flashcards
// Selecciona todas las tarjetas
const flashcards = document.querySelectorAll('.flashcard');

// Agrega un evento de clic/toque a cada tarjeta
flashcards.forEach((card) => {
    card.addEventListener('click', () => {
        // Alterna una clase activa para rotar la tarjeta
        card.classList.toggle('is-flipped');
    });
});

function cargarDatos() {
  const archivoInput = document.getElementById('archivoCSV');
  const archivo = archivoInput.files[0];

  if (!archivo) {
    alert('Por favor, selecciona un archivo CSV.');
    return;
  }

  const lector = new FileReader();

  lector.onload = function (evento) {
    const contenido = evento.target.result;
    const { etiquetas, datos,test } = procesarCSV(contenido);
    mostrarGrafica(etiquetas, datos,test);
  };

  lector.readAsText(archivo);
}

// Procesar el contenido del archivo CSV
function procesarCSV(contenido) {
  const lineas = contenido.split('\n').map(linea => linea.trim());
  const etiquetas = [0];
  const datos = [2];
  const test = [3];

  lineas.forEach((linea, index) => {
    if (linea) {
      const [etiqueta, valor] = linea.split(',');
      if (index === 0 && isNaN(Number(valor))) {
        // Omite encabezados si existen
        return;
      }
      etiquetas.push(etiqueta);
      datos.push((valor));
      test.push(Number(valor));
    }
  });
  
  return { etiquetas, datos, test };
}
console.log("Llevo el contenido".lineas);

// Generar la gráfica con Chart.js
function mostrarGrafica(etiquetas, datos,test) {
  const ctx = document.getElementById('miGrafica').getContext('2d');
  new Chart(ctx, {
    type: 'bar', // Tipo de gráfica
    data: {
      labels: etiquetas,
      datasets: [{
        label: 'Datos desde CSV',
        data: datos,
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }],
      datasets: [{
        label: 'Datos desde CSV',
        data: test,
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
          position: 'top',
        },
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}