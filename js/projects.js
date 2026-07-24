import { getProjects } from './services/projectService.js';

export function initProjects() {
    const container = document.getElementById('projects-content');
    if (!container) return;

    const projects = getProjects();
    console.log('Loaded projects:', projects.map(project => project.title));

    if (!projects || projects.length === 0) {
        container.innerHTML = '<div class="project-card"><div class="project-card-title">No projects available</div><div class="project-card-description">There are no projects configured yet.</div></div>';
        return;
    }

    container.innerHTML = projects.map(project => createProjectCard(project)).join('');
}

function createProjectCard(project) {
    const websiteLink = project.webLinkY ? project.webLink : null;
    const websiteLabel = project.webLinkLabel || 'Visit Website';
    const repoLabel = project.webLinkY ? 'GitHub Repo' : 'View on GitHub';

    return `
        <div class="project-card">
            <div class="project-card-title">${project.title}</div>
            <div class="project-card-description">${project.description}</div>
            <div class="project-card-links">
                ${websiteLink ? `<a class="project-card-link" href="${websiteLink}" target="_blank" rel="noopener">${websiteLabel}</a>` : ''}
                <a class="project-card-link" href="${project.url}" target="_blank" rel="noopener">${repoLabel}</a>
            </div>
        </div>
    `;
}
