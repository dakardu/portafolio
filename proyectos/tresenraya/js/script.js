let tirada = 0
const tablero = []

const btnPulsado = (e, pos) => {
    tirada++;
    const btn = e.target;
    const jugador = tirada % 2 ? 'x' : 'o'
    btn.innerHTML = jugador
    tablero[pos] = jugador
    if(haGanado())alert('👌 Ha ganado el jugador: '+jugador)
}

const haGanado = () => {
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }
    else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }
    else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }
    else if(tablero[0] == tablero[3] && tablero[0] == tablero[6] && tablero[0]){
        return true;
    }
    else if(tablero[1] == tablero[4] && tablero[1] == tablero[7] && tablero[1]){
        return true;
    }
    else if(tablero[2] == tablero[5] && tablero[2] == tablero[8] && tablero[2]){
        return true;
    }
    else if(tablero[0] == tablero[4] && tablero[0] == tablero[8] && tablero[0]){
        return true;
    }
    else if(tablero[2] == tablero[4] && tablero[2] == tablero[6] && tablero[2]){
        return true;
    }
    return false
}
document.querySelectorAll('.btn__tarjeta').forEach(
    (obj, i) => obj.addEventListener('click', (e) => btnPulsado(e, i)));
