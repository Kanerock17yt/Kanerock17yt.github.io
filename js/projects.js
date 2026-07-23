const projects = [
    {
        title: 'RNG Cases',
        description: 'Random case simulator project.',
        url: 'https://github.com/Kanerock17yt/RNG-Cases'
    },
    {
        title: 'Terminal',
        description: 'Custom terminal experience.',
        url: 'https://github.com/Kanerock17yt/Terminal'
    },
    {
        title: 'Notes App',
        description: 'Note-taking application.',
        url: 'https://github.com/Kanerock17yt/Notes-App'
    },
    {
        title: 'Markdown Previewer',
        description: 'Live markdown preview tool.',
        url: 'https://github.com/Kanerock17yt/markdown-Previewer'
    },
    {
        title: 'KA Language',
        description: 'Custom programming language runtime.',
        url: 'https://github.com/Kanerock17yt/ka-language'
    },
    {
        title: 'CS2 Case Opening',
        description: 'Counter-Strike 2 case opening simulator.',
        url: 'https://github.com/Kanerock17yt/CS2-Case-Opening'
    }
];

export function initProjects() {
    const container = document.getElementById('projects-content');
    if (!container) return;

    container.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

function createProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-card-title">${project.title}</div>
            <div class="project-card-description">${project.description}</div>
            <a class="project-card-link" href="${project.url}" target="_blank" rel="noopener">View on GitHub</a>
        </div>
    `;
}
