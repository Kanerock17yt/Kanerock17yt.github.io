export function buildProjectCard(project) {
    if (project.webLinkY == true && project.webLink != null) {return `
        <div class="project-card">
            <div class="project-card-title">${project.title}</div>
            <div class="project-card-description">${project.description}</div>
        </div>
    `;}
}
