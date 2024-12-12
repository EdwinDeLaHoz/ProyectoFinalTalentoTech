document.getElementById("mostrarEstadisticas").addEventListener("click", function() {
    const datos = document.getElementById("dato");
    const boton = document.getElementById("mostrarEstadisticas");
    
    // Si los datos están vacíos, mostrarlos
    if (datos.innerHTML.trim() === "") {
        const estadisticas = `
        <ul>
            <li>El 20% de la energía mundial proviene de fuentes renovables.</li>
            <li>La energía solar ha crecido un 35% en la última década.</li>
            <li>Más de 50 países han alcanzado metas de energías limpias.</li>
        </ul>
        `;
        datos.innerHTML = estadisticas;
        boton.textContent = "Ocultar Estadísticas"; // Cambia el texto del botón
    } else {
        // Si ya hay contenido, vaciarlo
        datos.innerHTML = "";
        boton.textContent = "Mostrar Estadísticas"; // Vuelve al texto original
    }
});

// Gráfico de Barras: Producción de Energía Renovable por Fuente
const ctxBarras = document.getElementById('graficoBarras').getContext('2d');
new Chart(ctxBarras, {
    type: 'bar',
    data: {
        labels: ['Eólica', 'Solar', 'Hidráulica', 'Biocombustibles', 'Geotérmica'],
        datasets: [{
            label: 'Producción (GWh)',
            data: [1200, 800, 1500, 500, 200],
            backgroundColor: ['#4caf50', '#4caf50', '#4caf50', '#4caf50', '#4caf50'],
        }]
    },
    options: {
        responsive: true,
        innerHeight: "600px",
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Producción de Energía por Fuente' }
        }
    }
});

// Gráfico de Torta: Participación de Energías Renovables
const ctxTorta = document.getElementById('graficoTorta').getContext('2d');
new Chart(ctxTorta, {
    type: 'pie',
    data: {
        labels: ['Eólica', 'Solar', 'Hidráulica', 'Biocombustibles', 'Geotérmica'],
        datasets: [{
            label: 'Porcentaje',
            data: [30, 25, 20, 15, 10],
            backgroundColor: ['#4caf50', '#ff9800', '#2196f3', '#9c27b0', '#ffc107'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Participación de Energías Renovables' }
        }
    }
});

// Gráfico de Líneas: Tendencia en la Capacidad Instalada
const ctxLineas = document.getElementById('graficoLineas').getContext('2d');
new Chart(ctxLineas, {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
        datasets: [
            {
                label: 'Eólica',
                data: [200, 300, 400, 600, 800, 1000, 1200],
                borderColor: '#4caf50',
                fill: false
            },
            {
                label: 'Solar',
                data: [100, 200, 350, 500, 700, 900, 1100],
                borderColor: '#ff9800',
                fill: false
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Tendencia en la Capacidad Instalada' }
        }
    }
});

// Gráfico de Área: Comparación entre Energía Renovable y Convencional
const ctxArea = document.getElementById('graficoArea').getContext('2d');
new Chart(ctxArea, {
    type: 'line',
    data: {
        labels: ['2010', '2012', '2014', '2016', '2018', '2020', '2022'],
        datasets: [
            {
                label: 'Renovable',
                data: [200, 400, 600, 800, 1000, 1200, 1400],
                borderColor: '#4caf50',
                backgroundColor: 'rgba(76, 175, 80, 0.3)',
                fill: true
            },
            {
                label: 'Convencional',
                data: [1500, 1400, 1300, 1200, 1100, 1000, 900],
                borderColor: '#ff5722',
                backgroundColor: 'rgba(255, 87, 34, 0.3)',
                fill: true
            },
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Comparación entre Energía Renovable y Convencional' }
        }
    }
});
