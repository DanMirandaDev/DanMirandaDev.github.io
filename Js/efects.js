function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightbox.style.display = "flex"; // Muestra el Lightbox
  lightboxImg.src = src; // Cambia la imagen del Lightbox
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.style.display = "none"; // Oculta el Lightbox
}

// Función para verificar si el elemento está en la vista
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Función para agregar la clase 'visible' a las imágenes que están en la vista
function checkVisibility() {
  const images = document.querySelectorAll('.img-scroll');
  images.forEach((img) => {
      if (isInView(img)) {
          img.classList.add('visible');
      }
  });
}

// Evento para detectar el scroll
window.addEventListener('scroll', checkVisibility);

// Llamada inicial para verificar si alguna imagen ya está visible al cargar la página
checkVisibility();
