document.addEventListener("DOMContentLoaded", () => {
    const projectsContainer = document.getElementById("projects-container");
    
    // Array de proyectos (personaliza con tus datos)
    const projects = [
      {
        name: "Portafolio Personal",
        description: "Mi sitio web personal para mostrar mis proyectos como desarrollador Front End.",
        technologies: ["HTML5", "CSS3", "JavaScript"],
        githubUrl: "https://github.com/tuusuario/mi-portfolio",
        demoUrl: "https://tuusuario.github.io/mi-portfolio",
        imageUrl: "img/proyectos/portafolio.png"
      },
      {
        name: "Web de Restaurante",
        description: "Página web de un restaurante con menú interactivo. desarrollado con HTML5, CSS, JavaScript, React",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        githubUrl: "https://github.com/tuusuario/tienda-react",
        demoUrl: "https://tienda-ejemplo.netlify.app",
        imageUrl: "img/proyectos/restaurante.png"
      },
      {
        name: "Weather App",
        description: "Aplicación del clima con API de OpenWeatherMap.",
        technologies: ["JavaScript", "API REST", "CSS Grid"],
        githubUrl: "https://github.com/tuusuario/weather-app",
        demoUrl: "https://tuusuario.github.io/weather-app",
        imageUrl: "img/proyectos/pasteleria.png"
      }
      // Añade más proyectos según necesites
    ];
  
    // Generar tarjetas de proyectos
    projects.forEach(project => {
      const projectCard = document.createElement("div");
      projectCard.className = "project-card";
      
      projectCard.innerHTML = `
        <div class="project-image">
          <img src="${project.imageUrl}" alt="Captura de ${project.name}" loading="lazy">
        </div>
        <div class="project-info">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `
              <span class="tech-tag" data-tech="${tech.toLowerCase()}">
                <i class="${getTechIcon(tech)}"></i> ${tech}
              </span>
            `).join("")}
          </div>
          <div class="project-links">
            <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="github-link">
              <i class="fab fa-github"></i> Código
            </a>
            ${project.demoUrl ? `
              <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="demo-link">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
            ` : ''}
          </div>
        </div>
      `;
      
      projectsContainer.appendChild(projectCard);
    });
  
    // Función para obtener iconos según tecnología
    function getTechIcon(tech) {
      const icons = {
        'HTML5': 'fab fa-html5',
        'CSS3': 'fab fa-css3-alt',
        'JavaScript': 'fab fa-js',
        'React': 'fab fa-react',
        'Bootstrap': 'fab fa-bootstrap',
        'Firebase': 'fas fa-database',
        'API REST': 'fas fa-cloud'
      };
      return icons[tech] || 'fas fa-code';
    }
  });