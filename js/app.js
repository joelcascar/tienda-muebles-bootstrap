/* Agregar imagen dinamicamente al modal */
const modalImagen = document.querySelector('#modal-imagen');

if(modalImagen){
    modalImagen.addEventListener('show.bs.modal', function(event){
        /* enlace va a contener al elemento que le demos clic. */
        const enlace = event.relatedTarget;
        // rutaImagen va a tener el valor del atributo data-bsimagen
        const rutaImagen = enlace.getAttribute('data-bs-imagen');
        // construir la imagen
        const imagen = document. createElement('IMG'); // creamos el elemento <img>
        imagen.classList.add("img-fluid"); // Agregamos la clase img-fluid de bootstrap.
        imagen.src = `img/${rutaImagen}.jpg`; // agregamos el atributo src y la ubicacion.
        imagen.alt = "Imagen galeria"; // Agregamos el atributo alt y el nombre de la imagen.
        
        // Poner la imagen en el modal
        
        // Obtenemos el elemento que le queremos poner la imagen.
        const contenidoModal = document.querySelector('.modal-body');
        // Añadimos la imagen como hijo de contenidoModal
        contenidoModal.appendChild(imagen);
    });
    
    // Evento hidden.bs.modal que ejecutara el código cuando se cierre el modal.
    modalImagen.addEventListener("hidden.bs.modal", function(e){
        // Obtenemos el elemento que le queremos poner la imagen.
        const contenidoModal = document.querySelector('.modal-body');
        // Limpiamos el contenido del contenidoModal
        contenidoModal.textContent = '';
    });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()