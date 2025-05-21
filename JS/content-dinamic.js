const tablesData = [];

// No es necesario crear tableContainer y carouselContainer aquí
// ya que ya existen en el HTML y se gestionan más abajo en renderTable

// Crea los botones dinámicamente
const prevBtn = document.createElement('button');
prevBtn.id = 'prevBtn'; // Usamos los IDs que ya tenías en JS
prevBtn.textContent = 'Anterior'; // Texto más descriptivo
prevBtn.onclick = prevTable;

const nextBtn = document.createElement('button');
nextBtn.id = 'nextBtn'; // Usamos los IDs que ya tenías en JS
nextBtn.textContent = 'Siguiente'; // Texto más descriptivo
nextBtn.onclick = nextTable;

// **ELIMINAMOS:** rotateBtn y navigationDiv ya no son necesarios
// porque usaremos el .table-buttons del HTML y directamente los botones prevBtn y nextBtn

tablesData.push(
    {
        data: [
            { 'Skill': 'HTML/CSS', 'Brief Description': 'Structure and style of web pages', 'Common Tools': 'HTML5, CSS3, Sass', 'Team Role': 'Layout developer, interface designer' },
            { 'Skill': 'JavaScript', 'Brief Description': 'Language for browser logic', 'Common Tools': 'Vanilla JS, jQuery, ES6+', 'Team Role': 'Client-side dynamism and validations' },
            { 'Skill': 'UI Frameworks', 'Brief Description': 'Libraries for efficient UI development', 'Common Tools': 'React, Vue.js, Angular', 'Team Role': 'Rapid component development' },
            { 'Skill': 'Responsive Design', 'Brief Description': 'Adaptation to different devices', 'Common Tools': 'Bootstrap, Flexbox, Media Queries', 'Team Role': 'Cross-platform accessibility' },
            { 'Skill': 'UX/UI', 'Brief Description': 'Improves user experience and interaction', 'Common Tools': 'Figma, Adobe XD, Sketch', 'Team Role': 'User-centered design' }
        ],
        className: '-Frontend-'
    },
    {
        data: [
            { 'Skill': 'Server Languages', 'Brief Description': 'Server-side programming', 'Common Tools': 'Node.js, Python, PHP, Java, C#', 'Team Role': 'Business logic and rules' },
            { 'Skill': 'Databases', 'Brief Description': 'Data management and structuring', 'Common Tools': 'MySQL, PostgreSQL, MongoDB', 'Team Role': 'CRUD, relationships, optimization' },
            { 'Skill': 'REST API', 'Brief Description': 'Communication interfaces between systems', 'Common Tools': 'Express, Django REST, Spring Boot', 'Team Role': 'Data exchange with front-end' },
            { 'Skill': 'Authentication', 'Brief Description': 'Control of access to the application', 'Common Tools': 'JWT, OAuth, Passport.js', 'Team Role': 'User and session security' },
            { 'Skill': 'Basic DevOps', 'Brief Description': 'Automation and integration of the environment', 'Common Tools': 'Docker, Git, CI/CD', 'Team Role': 'Application deployment and maintenance' }
        ],
        className: '-Backend-'
    },
    {
        data: [
            { 'Functionality': 'Requirement Gathering', 'Brief Description': 'Analysis of client and business needs', 'Common Tools': 'Interviews, forms, JIRA', 'Team Role': 'Requirements collection' },
            { 'Functionality': 'Systems Modeling', 'Brief Description': 'Logical design of processes and data structures', 'Common Tools': 'UML, BPMN, Draw.io', 'Team Role': 'Documentation of flows and entities' },
            { 'Functionality': 'Functional Analysis', 'Brief Description': 'Validation of requirements', 'Common Tools': 'Use cases, activity diagrams', 'Team Role': 'Translation between client and developers' },
            { 'Functionality': 'Validation and Testing', 'Brief Description': 'Supervision of functional compliance', 'Common Tools': 'Test cases, bug tracking', 'Team Role': 'Ensures the product meets expectations' },
            { 'Functionality': 'Communication', 'Brief Description': 'Interaction with stakeholders and technical teams', 'Common Tools': 'Meetings, reports, agile tools', 'Team Role': 'Bridge between business and technical team' }
        ],
        className: '-Analyst-'
    }
);
let currentTableIndex = 0;

// Referencias a los contenedores HTML
const carouselContainer = document.querySelector('.carousel-container'); // Ya existe en HTML
const tableContainerDiv = document.getElementById('table-container'); // Ya existe en HTML
const tableButtonsContainer = document.getElementById('table-buttons-container'); // Nuevo ID para el contenedor de botones

function createTable(tableData, tableClassName) {
    const table = document.createElement('table');
    table.className = 'generated-table';
    if (tableClassName) table.classList.add(tableClassName);

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    if (tableData && tableData.length > 0) {
        const headerRow = document.createElement('tr');
        for (const key in tableData[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);
        }
        thead.appendChild(headerRow);

        tableData.forEach(row => {
            const tr = document.createElement('tr');
            for (const key in row) {
                const td = document.createElement('td');
                td.textContent = row[key];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        });

        table.appendChild(thead);
        table.appendChild(tbody);
    }

    return table;
}

function renderTable() {
    tableContainerDiv.innerHTML = ''; // Limpiar el contenido de la tabla

    const currentTableInfo = tablesData[currentTableIndex];
    const tableTitle = document.createElement('h2');
    tableTitle.textContent = currentTableInfo.className.replace('tabla-', '').toUpperCase();
    tableTitle.style.textAlign = 'center';
    tableTitle.style.marginBottom = '10px';

    const table = createTable(currentTableInfo.data, currentTableInfo.className);
    tableContainerDiv.appendChild(tableTitle);
    tableContainerDiv.appendChild(table);

    // Adjuntar los botones al contenedor de botones en el HTML
    if (tableButtonsContainer.children.length === 0) { // Solo adjuntar si no están ya ahí
        tableButtonsContainer.appendChild(prevBtn);
        // Aquí podrías agregar un div vacío o un espacio si quieres un elemento "central" entre los botones,
        // pero para "Anterior" y "Siguiente" directamente uno al lado del otro es lo más común.
        // tableButtonsContainer.appendChild(rotateBtn); // Si rotateBtn fuera algo más que un espacio
        tableButtonsContainer.appendChild(nextBtn);
    }
    
    updateButtonStates();
}

function nextTable() {
    if (currentTableIndex < tablesData.length - 1) {
        currentTableIndex++;
        renderTable();
    }
}

function prevTable() {
    if (currentTableIndex > 0) {
        currentTableIndex--;
        renderTable();
    }
}

function updateButtonStates() {
    prevBtn.disabled = currentTableIndex === 0;
    nextBtn.disabled = currentTableIndex === tablesData.length - 1;

    // Cambiamos 'limit-reached' por una clase que afecte la opacidad o cursor si quieres un feedback visual
    prevBtn.classList.toggle('disabled-button', currentTableIndex === 0);
    nextBtn.classList.toggle('disabled-button', currentTableIndex === tablesData.length - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    const habilitySection = document.getElementById('hability'); // Seleccionamos la sección existente
    if (habilitySection) {
        // Aseguramos que el carouselContainer (que contiene table-container y table-buttons)
        // se adjunte correctamente a la sección hability
        habilitySection.appendChild(carouselContainer); // Ya lo estamos haciendo en renderTable, pero esto asegura la primera vez
    } else {
        // Si no hay sección hability, lo adjuntamos al body como fallback (menos común)
        document.body.appendChild(carouselContainer);
    }

    renderTable(); // Renderiza la primera tabla y adjunta los botones
});