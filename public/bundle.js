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

const trabajos = document.getElementById('trabajos');
const ventanaTrabajos =  document.getElementById('ventana-trabajos');
const datos = [
    {
        id : '1',
        titulo :  'Películas & Series populares',
        texto : `Este proyecto fue una oportunidad clave para mejorar el razonamiento lógico en JavaScript, especialmente en la implementación de filtros de campos para la clasificación de películas y series. Se perfeccionaron las habilidades para crear funciones lógicas y precisas en la manipulación de datos dinámicos. El manejo experto de APIs externas permitió una integración fluida de datos actualizados sobre películas y series populares, enriqueciendo la experiencia del usuario y demostrando habilidades en el tratamiento de información de fuentes externas.`, 
        enlace : 'https://david-f-98.github.io/Proyecto_APP_Peliculas/'
    },{
        id : '2',
        titulo :  'App de Gastos Personales',
        texto : `Este proyecto consiste en una aplicación web que permite al usuario registrar, consultar y gestionar sus gastos personales de forma fácil y eficiente. La aplicación cuenta con las siguientes características:

        -Un sistema de validaciones de campos, que verifica que los datos introducidos por el usuario sean correctos y coherentes, y que evita posibles errores o inconsistencias.
        -Un sistema de eventos de botones, que permite al usuario realizar diferentes acciones sobre sus gastos, como añadir, editar, eliminar, marcar como pagado, etc.
        -Un sistema de pantallas de notificaciones, que informa al usuario sobre el estado de sus operaciones, como el éxito, el fracaso, la confirmación, etc.
      `, 
        enlace : 'https://david-f-98.github.io/App_cartera_personal/'
    },{
        id : '3',
        titulo :  'Formulario con Validaciones',
        texto : `Este proyecto de desarrollo web se centró en mejorar el razonamiento lógico en JavaScript a través de la implementación de validaciones de campos en un formulario interactivo. El desarrollo de funciones precisas y lógicas para la verificación de datos fortaleció las habilidades en la manipulación de datos y la ejecución eficiente en JavaScript.

        La adopción de la metodología BEM permitió una estructura modular y organizada en la construcción de componentes del formulario, facilitando la escalabilidad y el mantenimiento del código. Esta metodología fomentó el desarrollo de una arquitectura limpia y adaptable.`,
        enlace : 'https://david-f-98.github.io/Proyecto_Formulario_JS/' 
    },{
        id : '4',
        titulo :  'Galeria de Imagenes',
        texto : `La galería, potenciada por la versatilidad de JavaScript, implementa un conjunto robusto de slides que permiten la transición fluida entre las imágenes, ofreciendo al usuario una navegación inmersiva y ágil. La optimización y la eficiencia se han priorizado mediante algoritmos de carga y presentación que garantizan una experiencia de usuario sin interrupciones. El proyecto permitió un crecimiento formacional al explorar técnicas avanzadas de diseño responsive y accesibilidad web, garantizando una experiencia óptima para usuarios en diferentes dispositivos. Se destacó la habilidad para desarrollar algoritmos eficientes para la transición suave entre imágenes y la implementación precisa de eventos de navegación.`, 
        enlace : 'https://david-f-98.github.io/Proyecto_Galeria/#'
    },{
        id : '5',
        titulo :  'Tienda Tennis',
        texto : `Este proyecto de tienda virtual de tennis fue una oportunidad clave para perfeccionar el razonamiento lógico en JavaScript, particularmente en el desarrollo de funciones para cálculos de carritos de compra. La implementación de operaciones complejas fortaleció las habilidades en la manipulación de datos y cálculos precisos.

        El proyecto también representó un crecimiento formacional al introducir pantallas de notificaciones dinámicas, mejorando la capacidad para proporcionar realimentación inmediata al usuario. La habilidad para gestionar eventos de botones con precisión mejoró, lo que permitió interacciones ágiles y fluidas.
        `,
        enlace:'https://david-f-98.github.io/E-commerce/' 
    },{
        id : '6',
        titulo :  'Encriptador & Desencriptador de Texto',
        texto : `Este proyecto destaca por su aplicación para encriptar y desencriptar texto, impulsada por tecnologías web avanzadas como JavaScript, CSS y HTML5. El proyecto se enfocó en mejorar el razonamiento lógico para ejecuciones precisas de funciones en JavaScript.

        La interfaz, diseñada con HTML5 y CSS, no solo es estéticamente agradable, sino que también demuestra habilidades en el diseño responsivo para una experiencia fluida en diferentes dispositivos.`, 
        enlace: 'https://david-f-98.github.io/Desaf-o-Alura.github.io/'
    }
];

trabajos.addEventListener('click',(e)=>{
    e.preventDefault();
    const trabajoClickeado = e.target.closest('.trabajos__trabajo');
    if(trabajoClickeado){
        const id = trabajoClickeado.dataset.id;
        const arregloNuevoTrabajos = datos.filter((trabajo)=>{
            if(trabajo.id === id){
                return trabajo;
            }        });

        const {titulo, texto, enlace} = arregloNuevoTrabajos[0];

        ventanaTrabajos.querySelector('.ventana__titulo').innerText = titulo;
        ventanaTrabajos.querySelector('.ventana__parrafo').innerText = texto;
        ventanaTrabajos.querySelector('.ventana__enlace').href = enlace;
        ventanaTrabajos.querySelector('.ventana__imagen').src = trabajoClickeado.querySelector('img').src;
        ventanaTrabajos.classList.add('ventana--active');
    }});


ventanaTrabajos.querySelector('button[data-action="cerrar-ventana"]').addEventListener('click',(e)=>{
    e.preventDefault();
    ventanaTrabajos.classList.remove('ventana--active');
});

ventanaTrabajos.querySelector('.ventana__overlay').addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.matches('.ventana__overlay')){
        ventanaTrabajos.classList.remove('ventana--active');
    }});

const slider = document.getElementById('slider');

let clickPresionado = false;
let coordenadaInicial;
let scrollLeft;


const presiona = (e) =>{
    clickPresionado = true;
    coordenadaInicial = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};
const mueve = (e) =>{
    if(!clickPresionado){
        return;
    }    const espaciado =  e.pageX - slider.offsetLeft;
    const distanciaRecorrida = espaciado - coordenadaInicial;

    slider.scrollLeft = scrollLeft - distanciaRecorrida;
};
const suelta = (e) =>{
    clickPresionado = false;
};

slider.addEventListener('mousedown', presiona);
slider.addEventListener('mousemove', mueve);
slider.addEventListener('mouseup', suelta);

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
