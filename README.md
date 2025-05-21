# 🌐 Portfolio Web - Daniel Osvaldo Coria (PFO2)

Este es mi portfolio web personal, diseñado para mostrar mis proyectos, habilidades y una sección interactiva para contactarme. El objetivo es presentarme como desarrollador en formación, con pasión por la tecnología, la programación y el diseño web.

---

## 📅 Fechas Importantes de la Práctica

* **Lanzamiento PFO2:** 14 de abril


---

## 📦 Formato de Entrega

Para la entrega de la PFO2, se publicarán los siguientes dos enlaces en el foro:

1.  **Link al repositorio:** Donde el docente revisará la carpeta de archivos y el `README.md`.
2.  **Link a la web publicada:** En GitHub Pages.

**Importante:** Este proyecto es una continuación de la PFO1, clonado para conservar ambos trabajos por separado, resultando en nuevos enlaces para esta entrega.

---

## 🔍 Resumen del Proyecto

Esta segunda práctica (PFO2) complementa la Landing Page desarrollada en la PFO1. El objetivo principal es incorporar funcionalidades interactivas con JavaScript para mejorar la experiencia del usuario. Adicionalmente, se han implementado al menos 2 mejoras en la estructura y los estilos del trabajo anterior.

---

## 🎯 Secciones Principales del Sitio

El sitio está construido utilizando HTML5, CSS3 y JavaScript, e incorpora Google Fonts y Font Awesome para mejorar la estética.

* **About Me**: Una breve introducción sobre quién soy y cuál es mi misión profesional.
* **Projects**: Descripción de algunos proyectos de ejemplo, incluyendo una plataforma E-Commerce, un sistema automatizado para ganadería y un análisis de tránsito urbano con IoT.
* **Hability**: Tablas dinámicas que muestran habilidades clasificadas por Frontend, Backend y Análisis, con navegación entre ellas.
* **Series**: Películas que me inspiran, con imágenes y descripciones colapsables.
* **Contact**: Formulario de contacto interactivo para conectarse conmigo.
* **Technologies**: Una sección dedicada a la presentación de tecnologías y sus detalles.

---

## 🌐 Funcionalidades Implementadas con JavaScript (Punto 1)

Se han implementado las siguientes 5 funcionalidades obligatorias con JavaScript, elegidas para mejorar la interactividad y la experiencia del usuario:

### 1. Creación de Contenido Dinámico (Tablas de Habilidades)

* **Descripción de la Implementación:** Se ha creado un array de objetos en JavaScript (`tablesData`) que contiene la información estructurada de las habilidades por categorías (Frontend, Backend, Analyst). Una función JavaScript (`createTable`) itera sobre estos datos para generar dinámicamente el HTML de las tablas, incluyendo encabezados y filas, que luego se insertan en la sección 'Hability'.
* **Justificación:** Permite una gestión centralizada y escalable del contenido de las tablas. Facilita la actualización o adición de nuevas habilidades sin modificar directamente el HTML, mejorando la mantenibilidad del código.

### 2. Galería Dinámica / Navegación de Contenido (Tablas de Habilidades)

* **Descripción de la Implementación:** Se ha implementado un sistema de carrusel para las tablas de habilidades. Mediante botones "Anterior" (`prevBtn`) y "Siguiente" (`nextBtn`) que el JavaScript crea y controla, el usuario puede navegar secuencialmente entre las diferentes tablas de habilidades. El JavaScript (`renderTable`, `nextTable`, `prevTable`, `updateButtonStates`) gestiona qué tabla se muestra y deshabilita los botones cuando se llega al inicio o al final del listado.
* **Justificación:** Mejora la experiencia de usuario al presentar información extensa de forma organizada y fácil de digerir. Evita el desplazamiento excesivo y permite al usuario enfocarse en una categoría de habilidades a la vez.

### 3. Pop-up de Confirmación de Envío (Formulario)

* **Descripción de la Implementación:** Tras la validación exitosa y el (simulado) envío del formulario de contacto, se muestra un pop-up de confirmación al usuario. Esto se logró utilizando la librería SweetAlert2, que proporciona un feedback visualmente atractivo y claro de que el mensaje ha sido "enviado" correctamente.
* **Justificación:** Proporciona un feedback claro y positivo al usuario, confirmando que su acción de envío se ha procesado. Esto reduce la incertidumbre y mejora la percepción de una interacción exitosa con el sitio.

### 4. Validación de Formulario (Contacto)

* **Descripción de la Implementación:** Antes de "enviar" el formulario de contacto, se implementó una validación en JavaScript (`formValidation.js`) que verifica que los campos obligatorios (Nombre, Apellido, Email, Teléfono) no estén vacíos. Si algún campo está incompleto, se muestran mensajes de error contextuales debajo de cada campo para guiar al usuario a completar la información necesaria.
* **Justificación:** Es esencial para la usabilidad y la recolección de datos válidos. Previene envíos de formularios incompletos y mejora la experiencia del usuario al ofrecer indicaciones claras para corregir errores.

### 5. Modo Oscuro/Claro

* **Descripción de la Implementación:** Se ha añadido un `switch` en la barra de navegación que permite al usuario alternar entre un tema de color oscuro y uno claro para todo el sitio. La preferencia del usuario se guarda en `LocalStorage` (`modo.js`) para que el sitio cargue con el modo seleccionado la próxima vez que el usuario lo visite.
* **Justificación:** Ofrece personalización y mejora la accesibilidad visual, siendo beneficioso en diferentes condiciones de luz o para usuarios con preferencias específicas. La persistencia de la preferencia a través de `LocalStorage` garantiza una experiencia de usuario consistente.

### **Adicionalmente, se implementaron:**

* **Ocultar y/o Mostrar Contenido (Sección Series):** Los botones "Ver más" en la sección de Series permiten expandir o contraer la descripción de cada película.
* **Temporizador o Reloj:** Se ha incluido un temporizador que muestra el tiempo restante para la entrega del trabajo práctico, visible en la parte superior de la página.
* **Contador de Visitas:** Se implementó un contador de visitas a la página utilizando JavaScript y `LocalStorage`, visible en el footer.
* **Filtros en el Contenido (Tecnologías):** Se añadió un menú desplegable "Technologies" que permite filtrar las tarjetas de habilidades por categorías específicas (Languages, Frameworks, Design Tools, etc.).

---

## 🎨 Mejoras o Cambios en el Diseño y Código (Punto 2)

Se han identificado e implementado al menos dos mejoras significativas en el diseño y la estructura del proyecto original:

### 1. Mejoras en la Estructura y Estilos de la Sección "About Me"

* **Explicación del Cambio:**
    Se realizó un rediseño de la sección "About Me" (`aside` y `.adventure-box`) para mejorar su adaptabilidad en diferentes tamaños de pantalla y su atractivo visual. La imagen de perfil se ha estilizado para ser rectangular y ajustarse mejor al flujo del `aside`, y se ha optimizado el espaciado y la tipografía para una mayor legibilidad. Se ha hecho un uso más eficiente de propiedades CSS como `flexbox` para el centrado y la distribución del contenido.
* **Cómo mejora la Experiencia del Usuario:**
    En dispositivos móviles, esta sección es ahora más compacta y menos invasiva, permitiendo una lectura más fluida del contenido principal. El ajuste de la imagen y el texto resulta en una interfaz más limpia y profesional, haciendo que la primera impresión sea más agradable y clara para el visitante.

    **Captura de Pantalla: Antes de las mejoras**
    ![Captura de la sección About Me antes de las mejoras. Se observa una imagen de perfil circular y un diseño previo.](image_fc968d.jpg)

    **Captura de Pantalla: Después de las mejoras**
    ![Captura de la sección About Me después de las mejoras. La imagen de perfil es rectangular y el diseño es más optimizado.](image_fc9eaa.jpg)

### 2. Rediseño de las Tablas y Visibilidad de los Botones de Navegación

* **Explicación del Cambio:**
    Se mejoró la responsividad de las tablas de habilidades, utilizando `overflow-x: auto` en `.table-container` para permitir el desplazamiento horizontal del contenido en pantallas pequeñas, sin cortar la información. Adicionalmente, los botones de navegación "Anterior" y "Siguiente" ahora son visibles y funcionales tanto en pantalla grande como en pantalla pequeña. Se les aplicó un estilo unificado y moderno (padding, bordes, sombras, y efectos de `hover`/`active`) y se ubicaron dentro de un contenedor (`.table-buttons`) con `display: flex` y `justify-content: center` para asegurar su centrado y correcta adaptación a las diferentes resoluciones.
* **Cómo mejora la Experiencia del Usuario:**
    La capacidad de desplazamiento en las tablas asegura que todo el contenido sea accesible en dispositivos móviles sin desbordamientos. La visibilidad constante y el diseño mejorado de los botones de navegación hacen que la exploración de las habilidades sea intuitiva y agradable en cualquier dispositivo, facilitando la interacción del usuario con la "galería" de tablas.

    **Captura de Pantalla: Visibilidad de botones en pantalla pequeña (Antes)**
    ![Captura de la tabla de habilidades en pantalla pequeña. Se observan flechas simples y no los botones de Anterior/Siguiente.](image_fd21cd.png)

    **Captura de Pantalla: Visibilidad de botones en pantalla grande (Antes)**
    ![Captura de la tabla de habilidades en pantalla grande. Los botones Anterior/Siguiente no tienen un estilo unificado y claro.](image_fdf3ee.png)

    **Captura de Pantalla: Tablas y botones (Después)**
    ![Captura de las tablas y los botones Anterior/Siguiente con el nuevo diseño, visibles y centrados.](image_f0c8c9.png)

---

**Nota:** La justificación de cada funcionalidad y mejora se basa en cómo la implementación contribuye a la usabilidad, accesibilidad, interactividad y mantenibilidad del proyecto.
