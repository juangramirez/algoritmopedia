const opcion = document.querySelectorAll('.opcion');


//Permite recorrer cada una de nuestras opciones
opcion.forEach(e => {
    //Añadimos un evento a cada elemento seleccionado
    e.addEventListener('click', function (e) {
        // Si el elemento clickeado es el div con la clase 'opcion'
        if (e.target.classList.contains('opcion')) {
            e.target.children[1].classList.toggle('rotate');
            //Alternamos las clases de nuestros enlaces
            const padre = e.target.parentNode;
            padre.children[1].classList.toggle('animation');
            padre.parentNode.children[1].classList.toggle('animation');
        }
        // Si el elemento clickeado es el h5 con la clase 'nombre'
        else if (e.target.classList.contains('nombre')) {
            // Agregar la clase 'animation' al elemento con la clase 'enlaces'
            const padre = e.target.parentNode.parentNode;
            padre.children[1].classList.toggle('animation');
            // Agregar la clase 'rotate' a la flecha
            e.target.parentNode.children[1].classList.toggle('rotate');
        }
        // Si el elemento clickeado es el svg con la clase 'flecha'
        else if (e.target.classList.contains('flecha')) {
            // Agregar la clase 'animation' al elemento con la clase 'enlaces'
            const padre = e.target.parentNode.parentNode;
            padre.children[1].classList.toggle('animation');
            // Agregar la clase 'rotate' a la flecha
            e.target.classList.toggle('rotate');
        }
        // Si el elemento es el path del svg
        else if (e.target.classList.contains('flecha-path')) {
            // Agregar la clase 'animation' al elemento con la clase 'enlaces'
            const padre = e.target.parentNode.parentNode.parentNode;
            padre.children[1].classList.toggle('animation');
            // Agregar la clase 'rotate' a la flecha
            e.target.parentNode.classList.toggle('rotate');
        }
    });
});

