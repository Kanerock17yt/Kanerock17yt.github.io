export function buildProjectCard(project) {
    return `
        <div class="project-card">
            <div class="project-card-title">${project.title}</div>
            <div class="project-card-description">${project.description}</div>
            <a class="project-card-link" href="${project.url}" target="_blank" rel="noopener">View on GitHub</a>
        </div>
    `;
}
