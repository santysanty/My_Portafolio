document.addEventListener("DOMContentLoaded", function () {
    // ... (Tu código de visitCount permanece igual) ...
    let visitCount = localStorage.getItem("page_visits");
    if (visitCount === null) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    localStorage.setItem("page_visits", visitCount);
    const visitCountElement = document.getElementById("visit-count");
    if (visitCountElement) {
        visitCountElement.textContent = `Page visits: ${visitCount}`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const deliveryDate = new Date("2025-05-20T23:59:00").getTime();
    const countdownElement = document.getElementById("countdown");
    const countdownTextElement = document.getElementById("countdown-text"); // Obtener el nuevo elemento de texto fijo

    if (!countdownElement || !countdownTextElement) { // Verificar ambos elementos
        console.error("One or more countdown elements not found.");
        return;
    }

    // Establecer el texto fijo de inmediato
    countdownTextElement.textContent = "Time remaining:"; // Asegúrate de que este texto fijo se establezca

    function updateTimer() {
        const now = new Date().getTime();
        const difference = deliveryDate - now;

        if (difference <= 0) {
            countdownTextElement.textContent = ""; // Ocultar el texto fijo al finalizar
            countdownElement.textContent = "Time's up!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // *** CAMBIO CLAVE AQUÍ: SIN <br> en el contador ***
        // El writing-mode se encargará de la orientación vertical.
        // Aquí mostramos el tiempo de forma horizontal dentro de su propio span.
        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
});