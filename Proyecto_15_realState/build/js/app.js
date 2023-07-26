const imagenes = document.querySelectorAll('.propiedad__imagen');



window.addEventListener('scroll', () => {

    let scroll = (this.scrollY / -20) % -80;

    imagenes.forEach((imagen) => {
        imagen.style.backgroundPositionY = `${scroll}px`;
    })
});
