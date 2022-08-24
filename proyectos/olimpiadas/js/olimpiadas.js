let btn = document.querySelector('.btn')
let anillos = document.querySelectorAll('.anillo')
//console.log(anillo1)
let contador = 0;
function ocultarAnillo(){
    anillos[contador].classList.toggle('ocultar')
    contador++
    // if(contador == 5){
    //     contador = 0
    // }
    contador == anillos.length? contador = 0: contador; // otra manera de hacer un if en una linea siempre lleva un else 

}


btn.addEventListener('click', ocultarAnillo)