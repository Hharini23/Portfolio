document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            "title": "Project 1",
            "description": "Calculator",
            "image": "https://i.pinimg.com/564x/70/fb/b5/70fbb5abf7586e59d9cc50eb78c7d46d.jpg"
        },
        {
            "title": "Project 2",
            "description": "Dress Shop",
            "image": "https://i.pinimg.com/564x/93/5d/ec/935decbf829df7ba7a431b4b40fea532.jpg"
        }
    ];
    
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title}">
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectDiv);
    });
});
