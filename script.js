const dado = document.getElementById('lanzarDado');
const resultadoDado = document.getElementById('resultadoDado');
const turnoJugador = document.getElementById('turnoJugador');

// Inicializamos las posiciones y el turno de los jugadores
let jugadores = [
    { id: 1, posicion: 0 },
    { id: 2, posicion: 0 },
    { id: 3, posicion: 0 },
    { id: 4, posicion: 0 }
];
let turnoActual = 0; // Empezamos con el Jugador 1
const totalCasillas = 40;

dado.addEventListener('click', () => {
    let numeroDado = Math.floor(Math.random() * 6) + 1;
    resultadoDado.textContent = 'Dado: ' + numeroDado;
    
    let jugador = jugadores[turnoActual];
    
    // Actualizamos la posición del jugador actual
    jugador.posicion += numeroDado;
    if (jugador.posicion >= totalCasillas) {
        jugador.posicion = jugador.posicion % totalCasillas; // Reinicia cuando pasa el inicio
    }

    // Movemos el jugador actual
    moverJugador(jugador.id, jugador.posicion);

    // Cambiamos al siguiente jugador
    turnoActual = (turnoActual + 1) % jugadores.length;
    turnoJugador.textContent = `Turno del Jugador ${jugadores[turnoActual].id}`;
});

function moverJugador(jugador, posicion) {
    // Limpiamos las casillas anteriores del jugador
    document.querySelectorAll('.casilla').forEach(casilla => {
        casilla.classList.remove(`jugador${jugador}`);
    });
    document.querySelectorAll('.casilla2').forEach(casilla => {
        casilla.classList.remove(`jugador${jugador}`);
    });
    document.querySelectorAll('.casilla3').forEach(casilla => {
        casilla.classList.remove(`jugador${jugador}`);
    });
    
    // Marcamos la nueva posición del jugador
    const nuevaCasilla = document.getElementById(posicion);
    nuevaCasilla.classList.add(`jugador${jugador}`);
}
