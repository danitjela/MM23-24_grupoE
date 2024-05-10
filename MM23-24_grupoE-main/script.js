
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

