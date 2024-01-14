'use strict';

const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        const trabajos  = galeria.querySelectorAll('.trabajos__imagenes a');
        trabajos.forEach((trabajo, index)=>{
            setTimeout(() => {
                trabajo.classList.add('trabajos__trabajo--visible');
                
            }, 200 * index);
        });
    }},{
    rootMargin: '0px 0px 0px 0px ',
    threshold: 0.5
});

observer.observe(galeria);

const animarTexto = (texto)=>{
    const numeroLetras = texto.dataset.texto.length;
    const cursor = texto.querySelector('.hero__cursor');
    cursor.classList.add('hero__cursor--visible');

    for (let i = 0; i < numeroLetras; i++) {
        setTimeout(() => {
            const letra = document.createElement('span');
            letra.append(texto.dataset.texto[i]);
            texto.append(letra);
        }, 120 * i);
    }
    setTimeout(() => {
        const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
        const indexCursorActual = cursores.indexOf(cursor);

        if(indexCursorActual < cursores.length-1){
            cursor.classList.remove('hero__cursor--visible');
        } else {
            cursor.classList.add('hero__cursor--active');
        }    }, numeroLetras * 100);

     //Retornamos una promesa para saber cuando acaba cada oracion
     return new Promise((resolve)=>setTimeout(resolve, numeroLetras * 100))
};

window.addEventListener('load', async()=>{
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));
    
    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
});
//# sourceMappingURL=bundle.js.map
