document.addEventListener('DOMContentLoaded', () => {
    const switchInput = document.getElementById('mode-switch');
    const body = document.body;

    function activarModoOscuro() {
        body.classList.remove('modo-claro');
        body.classList.add('modo-oscuro');
        localStorage.setItem('theme', 'dark-mode');
        switchInput.checked = true;
    }

    function activarModoClaro() {
        body.classList.remove('modo-oscuro');
        body.classList.add('modo-claro');
        localStorage.setItem('theme', 'light-mode');
        switchInput.checked = false;
    }

    const temaGuardado = localStorage.getItem('theme');
    if (temaGuardado === 'dark-mode') {
        activarModoOscuro();
    } else {
        activarModoClaro();
    }

    switchInput.addEventListener('change', () => {
        if (switchInput.checked) {
            activarModoOscuro();
        } else {
            activarModoClaro();
        }
    });
});

