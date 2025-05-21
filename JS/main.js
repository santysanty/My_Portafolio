// Archivo principal que importa o conecta otros módulos

// main.js

// Aquí podrías agregar otras inicializaciones si lo necesitás.


// Aquí irán las importaciones y la lógica principal
document.addEventListener('DOMContentLoaded', function() {
    const filterDropdown = document.querySelector('.filter-dropdown');
    const filterButton = filterDropdown ? filterDropdown.querySelector('.filter-button') : null;
    const dropdownContent = filterDropdown ? filterDropdown.querySelector('.dropdown-content') : null;
    const filterLinks = dropdownContent ? dropdownContent.querySelectorAll('a') : [];
    const technologySection = document.getElementById('technologies');
    const staticDatabaseCard = technologySection ? technologySection.querySelector('.technology-card[data-technology="data-bases"]') : null;
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksA = document.querySelectorAll('.nav-links a');

    const technologiesData = [
        { category: 'data-bases', title: 'Databases', level: 'Junior', demand: 'high', demandPercentage: 80, details: [ { name: 'MySQL', description: 'Experienced in relational database design and management.', demandIcon: 'high-demand-icon', growthIcon: 'growth-icon' }, { name: 'PostgreSQL', description: 'Knowledgeable in advanced querying and data integrity.', demandIcon: 'medium-demand-icon', stableIcon: 'stable-icon' }, ], salary: '~ $135,000/year', isOpenSource: true, community: 'Large and active', companies: ['Netflix', 'Spotify', 'GitHub'], },
        { category: 'languages-prog', title: 'Programming Languages', level: 'Senior', demand: 'high', demandPercentage: 85, details: [ { name: 'Python', description: 'Advanced with focus on web development and data analysis.', demandIcon: 'high-demand-icon', growthIcon: 'growth-icon' }, { name: 'JavaScript', description: 'Proficient in frontend and backend development.', demandIcon: 'very-high-demand-icon', stableIcon: 'stable-icon' }, { name: 'C++', description: 'Experienced in system programming and performance optimization.', demandIcon: 'medium-demand-icon', stableIcon: 'stable-icon' }, ], salary: '~ $140,000/year', isOpenSource: true, community: 'Huge and diverse', companies: ['Google', 'Instagram', 'NASA'], },
        { category: 'frameworks-libs', title: 'Frameworks & Libraries', level: 'Semi-Senior', demand: 'very-high', demandPercentage: 75, details: [ { name: 'React', description: 'Extensive experience in building dynamic user interfaces.', demandIcon: 'very-high-demand-icon', growthIcon: 'growth-icon' }, { name: 'Node.js', description: 'Experienced in server-side development and API design.', demandIcon: 'high-demand-icon', stableIcon: 'stable-icon' }, { name: 'Express.js', description: 'Solid understanding of backend framework for Node.js.', demandIcon: 'high-demand-icon', stableIcon: 'stable-icon' }, ], salary: '~ $130,000/year', isOpenSource: true, community: 'Very large and active', companies: ['Facebook', 'Airbnb', 'Uber'], },
        { category: 'design-tools', title: 'Design Tools', level: 'Semi-Senior', demand: 'medium', demandPercentage: 65, details: [ { name: 'Figma', description: 'Expertise in UI/UX design and prototyping.', demandIcon: 'medium-demand-icon', growthIcon: 'growth-icon' }, { name: 'Adobe Photoshop', description: 'Proficient in image manipulation and graphic design.', demandIcon: 'medium-demand-icon', stableIcon: 'stable-icon' }, { name: 'Adobe Illustrator', description: 'Skilled in vector graphics and illustration.', demandIcon: 'medium-demand-icon', stableIcon: 'stable-icon' }, ], salary: '~ $110,000/year', isOpenSource: false, community: 'Large', companies: ['Canva', 'Spotify', 'Adobe'], },
        { category: 'soft-skills', title: 'Soft Skills', level: 'Senior', demand: 'high', demandPercentage: 90, details: [ { name: 'Teamwork', description: 'Proven ability to collaborate effectively in team environments.', iconClass: 'fas fa-users' }, { name: 'Communication', description: 'Excellent written and verbal communication skills.', iconClass: 'fas fa-comments' }, { name: 'Problem Solving', description: 'Strong analytical and problem-solving abilities.', iconClass: 'fas fa-lightbulb' }, { name: 'Adaptability', description: 'Ability to quickly learn and adapt to new technologies and environments.', iconClass: 'fas fa-sync-alt' }, ], },
    ];

    let activeTechnologyFilter = 'all';

    function renderTechnologies(filter) {
        if (!technologySection) return;
        if (staticDatabaseCard) {
            staticDatabaseCard.style.display = (filter === 'all' || filter === 'data-bases') ? 'block' : 'none';
        }
        const dynamicCards = technologySection.querySelectorAll('.technology-card:not([data-technology="data-bases"])');
        dynamicCards.forEach(card => card.remove());
        technologiesData.forEach(tech => {
            if (tech.category !== 'data-bases' && (filter === 'all' || tech.category === filter)) {
                const article = document.createElement('div');
                article.className = 'technology-card';
                article.dataset.technology = tech.category;
                let detailsHTML = '';
                if (tech.details && Array.isArray(tech.details)) {
                    detailsHTML = `<ul class="technology-list">
                        ${tech.details.map(item => `
                            <li>
                                <span class="technology-name">${item.name}:</span> ${item.description}
                                ${item.demandIcon ? `<span class="demand-icon ${item.demandIcon}" title="${item.demandIcon.replace('-icon', '').replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}"></span>` : ''}
                                ${item.growthIcon ? `<span class="growth-icon" title="Good Growth Potential"></span>` : ''}
                                ${item.stableIcon ? `<span class="stable-icon" title="Stable Market"></span>` : ''}
                                ${item.iconClass ? `<i class="${item.iconClass}"></i> ` : ''}
                            </li>
                        `).join('')}
                    </ul>`;
                }
                let technologyDetailsHTML = `<div class="technology-details">`;
                if (tech.salary) technologyDetailsHTML += `<div class="info-item"><span class="info-label">Salary:</span> <span class="info-value salary">${tech.salary}</span></div>`;
                if (tech.isOpenSource !== undefined) technologyDetailsHTML += `<div class="info-item"><span class="info-label">Open Source:</span> <span class="info-value open-source">${tech.isOpenSource ? 'Yes' : 'No'}</span></div>`;
                if (tech.community) technologyDetailsHTML += `<div class="info-item"><span class="info-label">Community:</span> <span class="info-value community">${tech.community}</span></div>`;
                if (tech.companies && Array.isArray(tech.companies)) technologyDetailsHTML += `<div class="info-item"><span class="info-label">Used by:</span> <span class="info-value companies">${tech.companies.slice(0, 3).join(', ')}</span></div>`;
                technologyDetailsHTML += `</div>`;
                article.innerHTML = `
                    <h3 class="technology-title">${tech.title}</h3>
                    <p class="technology-category">${tech.level}</p>
                    ${tech.demand ? `
                        <div class="demand-timeline">
                            <div class="demand-bar ${tech.demand.toLowerCase().replace(' ', '-')}" style="width: ${tech.demandPercentage}%;"></div>
                            <span class="demand-icon ${tech.demand.toLowerCase().replace(' ', '-')}-icon"></span>
                        </div>
                    ` : ''}
                    ${detailsHTML}
                    ${technologyDetailsHTML}
                `;
                technologySection.appendChild(article);
            }
        });
    }

    renderTechnologies('all');

    // Lógica para el filtro de Tecnologías (ABRIR/CERRAR DESPLEGABLE)
    if (filterButton && dropdownContent) {
        filterButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Evitar que el clic se propague y cierre el menú hamburguesa (si está abierto)
            dropdownContent.classList.toggle('show'); // Asumiendo que tienes la clase 'show' en tu CSS para mostrar el desplegable
        });

        // Cerrar el desplegable si se hace clic fuera de él
        document.addEventListener('click', function(event) {
            if (dropdownContent && !filterDropdown.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    }

    // Lógica para el filtro de Tecnologías (SELECCIÓN DE ENLACE)
    if (filterLinks) {
        filterLinks.forEach(link => {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                event.stopPropagation();
                const filterValue = this.dataset.filter;
                activeTechnologyFilter = filterValue;
                renderTechnologies(filterValue);
                window.showSection('technologies');
                // Opcional: Cerrar el desplegable después de seleccionar una opción
                if (dropdownContent) {
                    dropdownContent.classList.remove('show');
                }
            });
        });
    }

    // Lógica para el menú hamburguesa (CERRAR AL SELECCIONAR ENLACE)
    if (hamburgerMenu && navLinks && navLinksA) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburgerMenu.classList.toggle('open');
        });

        navLinksA.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburgerMenu.classList.remove('open');
            });
        });
    }
});