
const socialLinks = document.querySelectorAll('ol a');
document.addEventListener('DOMContentLoaded', function() {
    const contribuirBtn = document.querySelectorAll('.boton button');
    const numContribuidoresSpan = document.getElementById('numContribuidores');

    let numContribuidores = localStorage.getItem('numContribuidores');

    if (!numContribuidores) {
        numContribuidores = 0;
    }
    numContribuidoresSpan.textContent = numContribuidores;

    contribuirBtn.forEach(boton => {
        boton.addEventListener('click', function() {
            numContribuidores++;
            numContribuidoresSpan.textContent = numContribuidores;
            localStorage.setItem('numContribuidores', numContribuidores);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const sonidoBoton = document.getElementById('sonidoBoton');
    const botonesContribuir = document.querySelectorAll('.boton button');

    botonesContribuir.forEach(boton => {
        boton.addEventListener('click', function() {
            sonidoBoton.currentTime = 0; 
            sonidoBoton.play();
        });
    });
});

socialLinks.forEach(link => {
    link.addEventListener('click', function(event) {
       
        event.preventDefault();
       
        window.open(this.href, '_blank');
    });


});

window.addEventListener('load', function() {
    if (window.matchMedia("(max-width: 800px)").matches) {
    var menuHeight = document.getElementById('menu').offsetHeight;
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.scrollMarginTop = menuHeight + 'px';
    });
}
});

