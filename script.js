document.addEventListener('DOMContentLoaded', function() {
    
    // Configuración inicial de las telas por defecto
    const configuracionInicial = {
        'nudo': 'tela_roja_puntos.jpg',
        'ala-izquierda': 'tela_roja_puntos.jpg',
        'ala-derecha': 'tela_roja_puntos.jpg'
    };

    function actualizarMoño(parte, tela) {
        const elementoParte = document.getElementById(parte);
        if (elementoParte) {
            elementoParte.style.backgroundImage = `url('assets/telas/${tela}')`;
        }
    }

    // Aplicar la configuración inicial al cargar la página
    for (const parte in configuracionInicial) {
        actualizarMoño(parte, configuracionInicial[parte]);
    }

    // Manejar clics en las opciones de tela
    const controles = document.getElementById('controles');
    controles.addEventListener('click', function(event) {
        if (event.target.classList.contains('opcion-tela')) {
            const parte = event.target.dataset.parte;
            const tela = event.target.dataset.tela;

            // Actualiza la vista previa del moño
            actualizarMoño(parte, tela);

            // Actualiza la configuración para el resumen
            configuracionInicial[parte] = tela;
            
            // Actualiza visualmente la selección activa
            // Quita la clase 'active' de las otras opciones de la misma sección
            const opcionesHermanas = event.target.parentElement.querySelectorAll('.opcion-tela');
            opcionesHermanas.forEach(op => op.classList.remove('active'));
            // Añade 'active' a la opción clickeada
            event.target.classList.add('active');
        }
    });

    // Manejar clic en el botón de resumen
    const botonResumen = document.getElementById('boton-resumen');
    const divResumen = document.getElementById('resumen-pedido');

    botonResumen.addEventListener('click', function() {
        divResumen.innerHTML = `
            <h4>Tu Diseño Personalizado:</h4>
            <p><strong>Nudo:</strong> ${configuracionInicial['nudo'].replace('.jpg', '').replace(/_/g, ' ')}</p>
            <p><strong>Ala Izquierda:</strong> ${configuracionInicial['ala-izquierda'].replace('.jpg', '').replace(/_/g, ' ')}</p>
            <p><strong>Ala Derecha:</strong> ${configuracionInicial['ala-derecha'].replace('.jpg', '').replace(/_/g, ' ')}</p>
            <p>¡Copia este resumen y envíanoslo para completar tu pedido!</p>
        `;
    });
});
