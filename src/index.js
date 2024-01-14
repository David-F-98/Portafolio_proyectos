import animarTexto from "./animarTexto";


window.addEventListener('load', async()=>{
    await animarTexto(document.querySelector('.hero__titulo--uno'));
    await animarTexto(document.querySelector('.hero__titulo--dos'));
})