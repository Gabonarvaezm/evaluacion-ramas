// ===== LANGUAGE SYSTEM =====
let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    
    // Update button states
    document.getElementById('langES').classList.toggle('active', lang === 'es');
    document.getElementById('langEN').classList.toggle('active', lang === 'en');
    
    // Update all translatable elements
    document.querySelectorAll('[data-lang-es]').forEach(el => {
        const text = el.getAttribute(`data-lang-${lang}`);
        if (text) {
            if (el.tagName === 'INPUT') {
                el.placeholder = text;
            } else {
                el.innerHTML = text;
            }
        }
    });
    
    // Update terminal welcome message if exists
    updateTerminalLanguage();
    
    // Store preference
    localStorage.setItem('portfolio-lang', lang);
}

function updateTerminalLanguage() {
    const welcomeEl = document.querySelector('.terminal-welcome');
    const helpEl = document.querySelector('.terminal-help');
    
    if (welcomeEl) {
        welcomeEl.textContent = currentLang === 'es' 
            ? '¡Bienvenido/a a mi terminal interactiva!' 
            : 'Welcome to my interactive terminal!';
    }
    if (helpEl) {
        helpEl.textContent = currentLang === 'es' 
            ? "Escribe 'help' para ver los comandos disponibles." 
            : "Type 'help' to see available commands.";
    }
}

// Initialize language on load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = localStorage.getItem('portfolio-lang') || 'es';
    setLanguage(savedLang);
});

// Language button event listeners
document.getElementById('langES')?.addEventListener('click', () => setLanguage('es'));
document.getElementById('langEN')?.addEventListener('click', () => setLanguage('en'));

// ===== INTERACTIVE TERMINAL =====
const terminalCommands = {
    es: {
        help: `
<div class="terminal-response">
Comandos disponibles:
━━━━━━━━━━━━━━━━━━━━━
• <span style="color:#ffcc00">about</span>     - Información sobre mí
• <span style="color:#ffcc00">skills</span>    - Mis habilidades técnicas
• <span style="color:#ffcc00">projects</span>  - Ver mis proyectos
• <span style="color:#ffcc00">contact</span>   - Información de contacto
• <span style="color:#ffcc00">education</span> - Mi formación académica
• <span style="color:#ffcc00">fun</span>       - Datos curiosos sobre mí
• <span style="color:#ffcc00">clear</span>     - Limpiar terminal
• <span style="color:#ffcc00">matrix</span>    - Efecto sorpresa ✨
</div>`,
        about: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         SOBRE MÍ                      ║
╚══════════════════════════════════════╝

👩‍💻 Nombre: Valeria Estefania Gongora Torres
🎂 Edad: 21 años
📍 Ubicación: Colombia
🎓 Carrera: Ingeniería de Software (5to Semestre)
🌐 Idiomas: Español (nativo), Inglés (B1)

Soy una persona carismática, empática y soñadora,
apasionada por el desarrollo web y el diseño de
interfaces modernas.
</div>`,
        skills: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         MIS HABILIDADES               ║
╚══════════════════════════════════════╝

💻 DESARROLLO:
   ├── HTML ████████░░ 85%
   ├── CSS  ████████░░ 80%
   ├── JavaScript ██████░░░░ 65%
   └── Figma ███████░░░ 75%

🎨 DISEÑO:
   ├── UI/UX Design ███████░░░ 70%
   └── Creatividad █████████░ 90%

🔧 SOFT SKILLS:
   • Adaptabilidad
   • Trabajo en equipo
   • Comunicación efectiva
</div>`,
        projects: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         MIS PROYECTOS                 ║
╚══════════════════════════════════════╝

📁 Proyecto 1: Portafolio Web
   └── HTML, CSS, Figma
   └── Diseño UI/UX moderno

📁 Proyecto 2: App de Tareas
   └── JavaScript
   └── Gestión de tareas interactiva

📁 Proyecto 3: Sistema de Login
   └── HTML, CSS
   └── Interfaz de autenticación

🔗 Ver más en la sección de proyectos ↑
</div>`,
        contact: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         CONTACTO                      ║
╚══════════════════════════════════════╝

📧 Email: valeria@email.com
📍 Ubicación: Colombia
💼 Estado: Disponible para prácticas

🔗 REDES SOCIALES:
   ├── GitHub: github.com/valeria
   └── LinkedIn: linkedin.com/in/valeria

¡Me encantaría escucharte! 💬
</div>`,
        education: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         FORMACIÓN ACADÉMICA           ║
╚══════════════════════════════════════╝

🎓 INGENIERÍA DE SOFTWARE
   └── 5to Semestre (en curso)
   └── Universidad en Colombia

📜 CERTIFICACIONES:
   └── Inglés B1

📚 ÁREAS DE ESTUDIO:
   • Programación
   • Diseño de interfaces
   • Desarrollo web
   • Lógica computacional
</div>`,
        fun: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         DATOS CURIOSOS                ║
╚══════════════════════════════════════╝

🤸 Practiqué gimnasia artística de pequeña
🌎 He viajado por Ecuador y Colombia
📸 Me gusta el modelaje y crear contenido
☕ Amante del café colombiano
🎨 Obsesionada con la estética visual
🚀 Soñadora y siempre aprendiendo
🎵 La música es mi compañera de código
</div>`,
        matrix: `
<div class="terminal-response" style="color: #00ff00 !important;">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿ VALERIA ⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿ .DEV ⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀

✨ ¡Bienvenido/a a la matrix de Valeria! ✨
"El código es poesía" - WordPress
</div>`,
        clear: 'CLEAR_TERMINAL'
    },
    en: {
        help: `
<div class="terminal-response">
Available commands:
━━━━━━━━━━━━━━━━━━━━━
• <span style="color:#ffcc00">about</span>     - Information about me
• <span style="color:#ffcc00">skills</span>    - My technical skills
• <span style="color:#ffcc00">projects</span>  - View my projects
• <span style="color:#ffcc00">contact</span>   - Contact information
• <span style="color:#ffcc00">education</span> - My academic background
• <span style="color:#ffcc00">fun</span>       - Fun facts about me
• <span style="color:#ffcc00">clear</span>     - Clear terminal
• <span style="color:#ffcc00">matrix</span>    - Surprise effect ✨
</div>`,
        about: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         ABOUT ME                      ║
╚══════════════════════════════════════╝

👩‍💻 Name: Valeria Estefania Gongora Torres
🎂 Age: 21 years old
📍 Location: Colombia
🎓 Major: Software Engineering (5th Semester)
🌐 Languages: Spanish (native), English (B1)

I'm a charismatic, empathetic, and dreamy person,
passionate about web development and modern
interface design.
</div>`,
        skills: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         MY SKILLS                     ║
╚══════════════════════════════════════╝

💻 DEVELOPMENT:
   ├── HTML ████████░░ 85%
   ├── CSS  ████████░░ 80%
   ├── JavaScript ██████░░░░ 65%
   └── Figma ███████░░░ 75%

🎨 DESIGN:
   ├── UI/UX Design ███████░░░ 70%
   └── Creativity █████████░ 90%

🔧 SOFT SKILLS:
   • Adaptability
   • Team work
   • Effective communication
</div>`,
        projects: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         MY PROJECTS                   ║
╚══════════════════════════════════════╝

📁 Project 1: Web Portfolio
   └── HTML, CSS, Figma
   └── Modern UI/UX design

📁 Project 2: Task App
   └── JavaScript
   └── Interactive task management

📁 Project 3: Login System
   └── HTML, CSS
   └── Authentication interface

🔗 See more in the projects section ↑
</div>`,
        contact: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         CONTACT                       ║
╚══════════════════════════════════════╝

📧 Email: valeria@email.com
📍 Location: Colombia
💼 Status: Available for internships

🔗 SOCIAL MEDIA:
   ├── GitHub: github.com/valeria
   └── LinkedIn: linkedin.com/in/valeria

I'd love to hear from you! 💬
</div>`,
        education: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         ACADEMIC BACKGROUND           ║
╚══════════════════════════════════════╝

🎓 SOFTWARE ENGINEERING
   └── 5th Semester (in progress)
   └── University in Colombia

📜 CERTIFICATIONS:
   └── English B1

📚 AREAS OF STUDY:
   • Programming
   • Interface design
   • Web development
   • Computational logic
</div>`,
        fun: `
<div class="terminal-response">
╔══════════════════════════════════════╗
║         FUN FACTS                     ║
╚══════════════════════════════════════╝

🤸 I practiced artistic gymnastics as a kid
🌎 I've traveled through Ecuador and Colombia
📸 I enjoy modeling and content creation
☕ Colombian coffee lover
🎨 Obsessed with visual aesthetics
🚀 Dreamer and always learning
🎵 Music is my coding companion
</div>`,
        matrix: `
<div class="terminal-response" style="color: #00ff00 !important;">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣤⣤⣤⣤⣤⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿ VALERIA ⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⣿⣿⣿⣿⣿⣿ .DEV ⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀
⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀

✨ Welcome to Valeria's matrix! ✨
"Code is poetry" - WordPress
</div>`,
        clear: 'CLEAR_TERMINAL'
    }
};

const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalBody = document.getElementById('terminalBody');

function executeCommand(command) {
    const cmd = command.toLowerCase().trim();
    const commands = terminalCommands[currentLang];
    
    // Add command to output
    const commandLine = document.createElement('p');
    commandLine.className = 'terminal-command';
    commandLine.textContent = `valeria@portfolio:~$ ${command}`;
    terminalOutput.appendChild(commandLine);
    
    // Get response
    if (commands[cmd]) {
        if (commands[cmd] === 'CLEAR_TERMINAL') {
            terminalOutput.innerHTML = '';
            const welcomeMsg = currentLang === 'es' 
                ? '¡Terminal limpiada! Escribe "help" para ver comandos.' 
                : 'Terminal cleared! Type "help" to see commands.';
            const clearMsg = document.createElement('p');
            clearMsg.className = 'terminal-welcome';
            clearMsg.textContent = welcomeMsg;
            terminalOutput.appendChild(clearMsg);
        } else {
            const response = document.createElement('div');
            response.innerHTML = commands[cmd];
            terminalOutput.appendChild(response);
        }
    } else {
        const errorMsg = currentLang === 'es' 
            ? `Comando no reconocido: "${cmd}". Escribe "help" para ver comandos disponibles.`
            : `Command not recognized: "${cmd}". Type "help" to see available commands.`;
        const error = document.createElement('p');
        error.className = 'terminal-error';
        error.textContent = errorMsg;
        terminalOutput.appendChild(error);
    }
    
    // Scroll to bottom
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Terminal input event
terminalInput?.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) {
        executeCommand(this.value);
        this.value = '';
    }
});

// Command chips click events
document.querySelectorAll('.command-chip').forEach(chip => {
    chip.addEventListener('click', function() {
        const command = this.getAttribute('data-command');
        executeCommand(command);
        terminalInput?.focus();
    });
});

// Focus terminal on click
document.querySelector('.terminal-body')?.addEventListener('click', function() {
    terminalInput?.focus();
});

// ===== MOBILE NAVIGATION TOGGLE =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle?.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = this.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        const spans = menuToggle?.querySelectorAll('span');
        if (spans) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(253, 248, 244, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(27, 42, 65, 0.08)';
        } else {
            navbar.style.background = 'rgba(253, 248, 244, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to elements
document.querySelectorAll('.project-card, .skill-card, .testimonial-card, .experience-item, .strength-item, .terminal-container').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Skill bar animation
const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease-out';
                    bar.style.width = width;
                }, 200);
            });
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks?.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#1B2A41';
        } else {
            link.style.color = '';
        }
    });
});

// Console welcome message
console.log('%c¡Bienvenido al portafolio de Valeria! 👩‍💻', 'color: #1B2A41; font-size: 16px; font-weight: bold;');
console.log('%cEstudiante de Ingeniería de Software | 5to Semestre', 'color: #3D5A80; font-size: 12px;');
console.log('%c🚀 ¡Prueba la terminal interactiva!', 'color: #00ff88; font-size: 12px;');
