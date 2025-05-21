
  const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinksMobile = document.querySelector('.nav-links.mobile-menu');

if (hamburgerMenu && navLinksMobile) {
    hamburgerMenu.addEventListener('click', () => {
        navLinksMobile.classList.toggle('open');
        hamburgerMenu.classList.toggle('open'); // Opcional
    });
}
  