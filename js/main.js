const burger =document.querySelector('.burger')
const figureRotate = document.querySelector('.container__figure')
const arrayImages = ['img/desarrollo.jpg', 'img/pc.jpg', 'img/laweb.jpg', 'img/seguridad.jpeg', 'img/web.jpg', 'img/notebook.jpg']
let contador = 0
let angle = 0

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
                img.style.backgroundImage = `linear-gradient(rgb(49, 36, 80,0.363), rgba(0, 0, 0, 0.486)), url(${arrayImages[contador - 1]})`
                contador--
            }else{
                img.style.backgroundImage = `linear-gradient(rgb(49, 36, 80,0.363), rgba(0, 0, 0, 0.486)), url(${arrayImages[arrayImages.length -1]})`
                contador = arrayImages.length -1
            }
        }else if(tgt == adelante){
            if(contador < arrayImages.length -1){
                img.style.backgroundImage = `linear-gradient(rgb(49, 36, 80,0.363), rgba(0, 0, 0, 0.486)), url(${arrayImages[contador + 1]})`
                contador++
            }else{
                img.style.backgroundImage = `linear-gradient(rgb(49, 36, 80,0.363), rgba(0, 0, 0, 0.486)), url(${arrayImages[0]})`
                contador = 0
            }
        } 
    })
}

burger.addEventListener('click', visualizarLista)
//figureRotate.addEventListener('mouseover', rotarImagen)
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.container__inner')
    carrousel(contenedor)
})