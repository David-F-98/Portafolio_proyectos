const galeria = document.getElementById('trabajos');

const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        const trabajos  = galeria.querySelectorAll('.trabajos__imagenes a');
        trabajos.forEach((trabajo, index)=>{
            setTimeout(() => {
                trabajo.classList.add('trabajos__trabajo--visible');
                
            }, 200 * index);
        });
    };
},{
    rootMargin: '0px 0px 0px 0px ',
    threshold: 0.5
});

observer.observe(galeria)