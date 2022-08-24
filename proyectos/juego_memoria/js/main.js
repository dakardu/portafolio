// Declaracion de variables
let tarjetasDestapadas = 0;
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null
let movimientos = 0
let aciertos = 0
let temporizador = false
let timer = 30
let timeInicial = timer
let tiempoRegresivoId = null

//Apumtando a documento HTML
let mostrarMovimientos = document.querySelector('#movimientos')
let mostrarAciertos = document.querySelector('#aciertos')
let mostrarTiempo =  document.querySelector('#t-restante')

// Generacion de numeros aleatorios
let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numbers = numbers.sort(() => Math.random() - 0.5)
console.log(numbers)

function contarTiempo(){
    tiempoRegresivoId = setInterval(() => {
        timer--;
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
        if(timer == 0){
            clearInterval(tiempoRegresivoId)
            bloquearTarjetas()
        }
    },1000)
}

function bloquearTarjetas(){
    for(let i = 0; i <= 15; i++){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = numbers[i]
        tarjetaBloqueada.disabled = true
    }
}

function destapar(id){

    if(temporizador == false){
        contarTiempo();
        temporizador = true
    }

    tarjetasDestapadas++;
    console.log(tarjetasDestapadas)

    if(tarjetasDestapadas == 1){
        tarjeta1 = document.getElementById(id);
        primerResultado = numbers[id]
        tarjeta1.innerHTML = primerResultado

        // desabilitar click e boton despues de haberlo pulsado
        tarjeta1.disabled = true
    }else if(tarjetasDestapadas == 2){
        tarjeta2 = document.getElementById(id);
        segundoResultado = numbers[id]
        tarjeta2.innerHTML = segundoResultado

        // desabilitar click e boton despues de haberlo pulsado
        tarjeta2.disabled = true

        //incremento los movimientos
        movimientos++;
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`
    
        if(primerResultado == segundoResultado){
            // Reseteo el contador de tajetas destapadas
            tarjetasDestapadas = 0;

            // Aumentar los aciertos
            aciertos++;
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
            if(aciertos == 8){
                clearInterval(tiempoRegresivoId)
                mostrarAciertos.innerHTML = `Aciertos: ${aciertos} 😱`
                mostrarTiempo.innerHTML = `Fantastico 🎆 solo tardaste  ${timeInicial -timer} segundos`
                mostrarMovimientos.innerHTML = `Movimientos: ${movimientos} 🤘😎`
            }
        }else{
            // Mostrar momentaneamente valores y volver a ocultarlos
            setTimeout(() =>{
                tarjeta1.innerHTML = ' ';
                tarjeta2.innerHTML = ' ';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },800)
        }
    }
}