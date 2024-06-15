document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const languageSwitch = document.getElementById("language-select");
    const textElements = document.querySelectorAll("[data-key]");

    const translations = {
        es: {
            name: "Matias Mazzitelli",
            "job-title": "Desarrollador Java Backend",
            "repos": "10 Repositorios en GitHub",
            "followers": "10 Seguidores",
            "commits": "60 Commits este año",
            "about-me": "Hola, soy Matias. Soy un desarrollador Java Backend que ama resolver problemas construyendo cosas geniales con código.",
            "email-me": "Envíame un email",
            "stack": "Mi stack",
            "latest-projects": "Últimos Proyectos",
            "project-1-description": "<strong>Bazar API</strong> Es una API desarrollada con Java y Spring para gestionar una tienda de bazar. Fue construida como proyecto final en el marco del curso 'API's con Springboot' de TodoCode.",
            "project-2-description": "<strong>Calculadora Js</strong> Es una app del tipo calculadora desarrollada utilizando HTML, CSS y Js. Fue construida para el curso 'Foundations' de The Odin Project.",
            "project-3-description": "<strong>Conversor de numeros romanos</strong> Es una aplicación útil para convertir un número en notación árabe a notación romana. Fue construido usando HTML, CSS y Js para el curso de 'Javascript' de freeCodeCamp.",
            "project-4-description": "<strong>Etch-a-Sketch</strong> Es una herramienta divertida para dibujar cosas geniales, hecha para el curso 'Foundations' de The Odin Project usando HTML, CSS y Js.",
            "project-5-description": "<strong>Piedra, Papel o Tijeras</strong> Es una versión divertida del clásico juego del mismo nombre, construida para el curso 'Foundations' de The Odin Project usando HTML, CSS y Js.",
            "project-6-description": "<strong>Página de Inicio</strong> Es mi primer proyecto frontend realizado para el curso 'Foundations' de The Odin Project. Fue construida utilizando HTML y CSS.",
            "like-my-work": "¿Te gusta mi trabajo?",
        },
        en: {
            name: "Matias Mazzitelli",
            "job-title": "Java Backend Developer",
            "repos": "10 GitHub Repositories",
            "followers": "10 Followers",
            "commits": "60 Commits this year",
            "about-me": "Hi, I'm Matias Mazzitelli, a java backend developer who loves building cool things with code to resolve problems.",
            "email-me": "Email me",
            "stack": "My stack",
            "latest-projects": "Latest Projects",
            "project-1-description": "<strong>Bazar API</strong> Is a simple API to manage a bazar store. It was made using Java & Spring for the API's with springboot course (TodoCode Academy).",
            "project-2-description": "<strong>Js Calculator</strong> Is a simple calculator made for The Odin Project's Foundations course using HTML, CSS and Js.",
            "project-3-description": "<strong>The Roman Conversor</strong> Is a useful application to convert a number in Arabic notation to Roman notation. It was built using HTML, CSS and Js for freeCodeCamp's Javascript course.",
            "project-4-description": "<strong>Etch-a-Sketch</strong> Is a funny tool to draw cool things, built for The Odin Project's Foundations course using HTML, CSS and Js.",
            "project-5-description": "<strong>Rock, Paper or Scissors</strong> Is a fun version of the classic game of the same name, built for The Odin Project's Foundations course using HTML, CSS and Js.",
            "project-6-description": "<strong>Landing Page</strong> It is my first frontend project carried out for The Odin's Project Foundations Course. It was made using HTML and CSS.",
            "like-my-work": "Do you like my work?",
        }
    };

    // Toggle theme
    themeToggle.addEventListener("change", () => {
        document.body.classList.toggle("light-mode");
    });

    // Change language
    languageSwitch.addEventListener("click", (event) => {
        if (event.target.dataset.lang) {
            const selectedLanguage = event.target.dataset.lang;
            document.querySelectorAll(".language-switch span").forEach(span => {
                span.classList.remove("active");
            });
            event.target.classList.add("active");
            textElements.forEach(element => {
                const key = element.getAttribute("data-key");
                element.innerHTML = translations[selectedLanguage][key];
            });
        }
    });
});