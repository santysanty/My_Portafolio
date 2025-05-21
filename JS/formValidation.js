// Validación de formulario


// formValidation.js

// formValidation.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".formulario-contacto");
  
    if (!form) {
      alert("No se encontró el formulario con la clase .formulario-contacto");
      console.error("No se encontró el formulario con la clase .formulario-contacto");
      return;
    }
  
    const telefonoInput = document.getElementById("telefono");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const nombre = document.getElementById("nombre");
      const apellido = document.getElementById("apellido");
      const email = document.getElementById("email");
      const telefono = telefonoInput;
  
      limpiarErrores();
  
      let errores = [];
  
      if (nombre.value.trim() === "") mostrarError(nombre, "El nombre es obligatorio");
      if (apellido.value.trim() === "") mostrarError(apellido, "El apellido es obligatorio");
  
      if (email.value.trim() === "") {
        mostrarError(email, "El email es obligatorio");
      } else if (!validarEmail(email.value.trim())) {
        mostrarError(email, "El formato de email no es válido");
      }
  
      if (telefono.value.trim() === "") {
        mostrarError(telefono, "El teléfono es obligatorio");
      } else if (!validarTelefono(telefono.value.trim())) {
        mostrarError(telefono, "El teléfono solo puede contener números (mín. 7 dígitos)");
      }
  
      errores = document.querySelectorAll(".error-mensaje");
  
      if (errores.length === 0) {
        Swal.fire({
          title: '¡Enviado!',
          text: 'Tu mensaje ha sido enviado correctamente.',
          icon: 'success',
          confirmButtonText: 'Aceptar',
          background: '#8e44ad', // Fondo violeta
          color: '#ffffff', // Texto blanco
          confirmButtonColor: '#f06292',
        }).then(() => {
          form.reset();
        });
      } else {
        Swal.fire({
          title: '¡Error!',
          text: 'Por favor, revisa los campos marcados.',
          icon: 'error',
          confirmButtonText: 'Entendido',
          background: '#8e44ad', // Fondo violeta
          color: '#ffffff', // Texto blanco
          confirmButtonColor: '#f06292',
        });
      }
    });
  
    function mostrarError(campo, mensaje) {
      const error = document.createElement("span");
      error.classList.add("error-mensaje");
      error.textContent = mensaje;
      campo.parentElement.appendChild(error);
      campo.classList.add("input-error");
    }
  
    function limpiarErrores() {
      document.querySelectorAll(".error-mensaje").forEach(el => el.remove());
      document.querySelectorAll(".input-error").forEach(el => el.classList.remove("input-error"));
    }
  
    function validarEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  
    function validarTelefono(telefono) {
      const cleaned = telefono.replace(/\s+/g, "");
      const regex = /^[0-9]{7,15}$/;
      return regex.test(cleaned);
    }
  
    telefonoInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^0-9]/g, '');
    });
  });
  
// Aquí irán las funciones para validar el formulario