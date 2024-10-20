// Manejo del modal
const projects = document.querySelectorAll('.project'); // Selecciona todos los elementos con la clase 'project'
const modals = document.querySelectorAll('.modal'); // Selecciona todos los elementos con la clase 'modal'
const closeButtons = document.querySelectorAll('.close'); // Selecciona todos los botones de cierre

// Agrega un evento de clic a cada proyecto
projects.forEach(project => {
    project.addEventListener('click', () => {
        const modalId = project.getAttribute('data-modal'); // Obtiene el ID del modal asociado desde el atributo 'data-modal'
        const modal = document.getElementById(modalId); // Selecciona el modal correspondiente utilizando su ID
        modal.style.display = 'flex'; // Muestra el modal configurando el estilo de visualización a 'flex'
    });
});

// Agrega un evento de clic a cada botón de cierre
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.parentElement.style.display = 'none'; // Oculta el modal al configurar su estilo de visualización a 'none'
    });
});

// Cierra el modal si se hace clic fuera de él
window.addEventListener('click', (e) => {
    modals.forEach(modal => {
        if (e.target === modal) { // Verifica si el clic se realizó en el fondo del modal
            modal.style.display = 'none'; // Oculta el modal
        }
    });
});

// Cierra todos los modales al presionar la tecla 'Escape'
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { // Verifica si la tecla presionada es 'Escape'
        modals.forEach(modal => {
            modal.style.display = 'none'; // Oculta el modal
        });
    }
});
