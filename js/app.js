import { initDesktop } from './desktop.js';
import { initProjects } from './projects.js';
import { initStartMenu } from './startMenu.js';
import { initClock } from './clock.js';
import { initMatrix } from './matrix.js';
import { openWindow } from './windowManager.js';

function initializeApp() {
    initDesktop();
    initProjects();
    openWindow('window-projects', 'tab-projects');
    initStartMenu();
    initClock();
    initMatrix();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}
