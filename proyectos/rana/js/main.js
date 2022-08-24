// let rana = {
//     x: 0,
//     y: 0,
//     moverIzq: function(){
//         this.x = this.x - 1
//     },
//     moverDrch: function(){
//         this.x = this.x +1
//     },
//     moverArri: function(){
//         this.y = this.y -1
//     },
//     moverAbaj: function(){
//         this.y = this.y +1
//     }
// }

// rana.moverIzq()
// console.log(rana.x)

let rana = document.querySelector('.container__figure--rana')
//console.log(rana)
let btnArriba = document.querySelector('.container__boton--arriba')
let btnDrcha = document.querySelector('.container__boton--drcha')
let btnAbajo = document.querySelector('.container__boton--abajo')
let btnIzda = document.querySelector('.container__boton--izda')


const PASOS_RANA = 20;
let objetoRana = {
    x: 0,
    y: 0,
    moverArriba: function(){
        this.y -= PASOS_RANA;
        rana.style.top = this.y +'px'
        if(objetoRana.x == 200 && objetoRana.y === 240){
            alert('¡Felicitaciones! has ganado.....')
        }
    },
    moverDrch: function(){
        this.x += PASOS_RANA;
        rana.style.left = this.x +'px'
        if(objetoRana.x == 200 && objetoRana.y === 240){
            alert('¡Felicitaciones! has ganado.....')
        }
    },
    moverAbajo: function(){
        this.y += PASOS_RANA;
        rana.style.top = this.y +'px'
        if(objetoRana.x == 200 && objetoRana.y === 240){
            alert('¡Felicitaciones! has ganado.....')
        }
    },
    moverIzda: function(){
        this.x -= PASOS_RANA;
        rana.style.left = this.x +'px'
        if(objetoRana.x == 200 && objetoRana.y === 240){
            alert('¡Felicitaciones! has ganado.....')
        }
    }
} 

btnArriba.onclick = () => objetoRana.moverArriba();
btnDrcha.onclick = () => objetoRana.moverDrch();
btnAbajo.onclick = () => objetoRana.moverAbajo();
btnIzda.onclick = () => objetoRana.moverIzda();


// btnAbajo.onclick = () => rana.style.top = '20px';
// btnIzda.onclick = () => rana.style.left = '-20px';