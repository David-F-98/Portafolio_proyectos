import './animacionGaleria';
import './galeria';
import './slider';
import './ventanaCorreo';
import animarTexto from "./animarTexto";


window.addEventListener('load', async()=>{
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));
    
    document.querySelectorAll('.hero__burbuja')[0].classList.add('hero__burbuja--active-1');
    document.querySelectorAll('.hero__burbuja')[1].classList.add('hero__burbuja--active-2');
})