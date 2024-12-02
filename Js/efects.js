// Función para verificar si un elemento está parcialmente visible
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom > 0
    );
  }
  
  // Función para manejar el scroll
  function onScroll() {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
      if (isElementInViewport(container)) {
        container.classList.add('active'); // Agregar clase si está visible
      } else {
        container.classList.remove('active'); // Quitar clase si ya no está visible
      }
    });
  }
  
  // Escuchar el evento scroll
  window.addEventListener('scroll', onScroll);
  
  // Ejecutar al cargar la página
  document.addEventListener('DOMContentLoaded', onScroll);
  