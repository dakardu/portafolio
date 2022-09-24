const burger =document.querySelector('.burger')
const arrayImages = ['img/desarrollo.jpg', 'img/pc.jpg', 'img/laweb.jpg', 'img/seguridad.jpeg', 'img/web.jpg', 'img/notebook.jpg']
const btnProyuno = document.querySelectorAll('.container__button--proyuno')
const btnProydos = document.querySelectorAll('.container__button--proydos')
const btnOcultarNetx = document.querySelector('.container__adelante')
const btnOcultarBack = document.querySelector('.container__atras')
const body = document.querySelector('.body')
//console.log(body)

let contador = 0
let angle = 0

//console.log(btnProyuno)

function visualizarLista(){
    const lista = document.querySelector('.lista')
    const listaLi = document.querySelectorAll('.lista__li')
    console.log(listaLi)
    lista.classList.toggle('lista__activada')
    burger.classList.toggle('toogle')

    listaLi.forEach((li, index) => li.style.transition = `all ${2*index + 2}s`)
}

function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
       const atras = document.querySelector('.container__atras')
        const adelante = document.querySelector('.container__adelante')
        const img = document.querySelector('.container__inner')
        const tgt = e.target

        if(tgt == atras){
            if(contador > 0){
                img.style.backgroundImage = `linear-gradient(rgb(64 125 197 / 14%), rgb(27 21 21 / 80%)), url(${arrayImages[contador - 1]})`
                contador--
            }else{
                img.style.backgroundImage = `linear-gradient(rgb(64 125 197 / 14%), rgb(27 21 21 / 80%)), url(${arrayImages[arrayImages.length -1]})`
                contador = arrayImages.length -1
            }
        }else if(tgt == adelante){
            if(contador < arrayImages.length -1){
                img.style.backgroundImage = `linear-gradient(rgb(64 125 197 / 14%), rgb(27 21 21 / 80%)), url(${arrayImages[contador + 1]})`
                contador++
            }else{
                img.style.backgroundImage = `linear-gradient(rgb(64 125 197 / 14%), rgb(27 21 21 / 80%)), url(${arrayImages[0]})`
                contador = 0
            }
        } 
    })
}

for(let i = 0; i<btnProyuno.length; i++){
    btnProyuno[i].addEventListener('mouseover', function(){
        btnProyuno[i].style.backgroundColor = '#4c4eac'
    })
    btnProyuno[i].addEventListener('mouseout', function(){
        btnProyuno[i].style.backgroundColor = '#5052b5'
    })
}
for(let i = 0; i<btnProydos.length; i++){
    btnProydos[i].addEventListener('mouseover', function(){
        btnProydos[i].style.backgroundColor = '#5052b5'
    })
    btnProydos[i].addEventListener('mouseout', function(){
        btnProydos[i].style.backgroundColor = '#4c4eac'
    })
}

function ocultarBotones(){
    if(window.scrollY > 80){
        btnOcultarNetx.classList.add('container__btn--ocultar') 
        btnOcultarBack.classList.add('container__btn--ocultar')
     }else if(window.scrollY === 0){
        btnOcultarNetx.classList.remove('container__btn--ocultar') 
        btnOcultarBack.classList.remove('container__btn--ocultar')
    }
}

document.addEventListener('scroll', ocultarBotones)


burger.addEventListener('click', visualizarLista)

document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.container__inner')
    carrousel(contenedor)
})