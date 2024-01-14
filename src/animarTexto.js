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
    };

    setTimeout(() => {
        const cursores = [...texto.closest('.hero__header').querySelectorAll('.hero__cursor')];
        const indexCursorActual = cursores.indexOf(cursor);

        if(indexCursorActual < cursores.length-1){
            cursor.classList.remove('hero__cursor--visible');
        } else{
            cursor.classList.add('hero__cursor--active');
        };
    }, numeroLetras * 100);

     //Retornamos una promesa para saber cuando acaba cada oracion
     return new Promise((resolve)=>setTimeout(resolve, numeroLetras * 100))
};
 export default animarTexto;