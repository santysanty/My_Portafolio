document.addEventListener("DOMContentLoaded", () => {
    const botones = document.querySelectorAll('.toggle-descripcion');
  
    botones.forEach(boton => {
      boton.addEventListener('click', () => {
        const descripcion = boton.previousElementSibling;
        descripcion.classList.toggle('oculto');
        boton.textContent = descripcion.classList.contains('oculto') ? 'Ver más' : 'Ver menos';
      });
    });
  });
  