import { openWindow } from './windowManager.js';

export function initStartMenu() {
    const startBtn = document.getElementById('start-btn');
    const startMenu = document.getElementById('start-menu');
    const menuItems = Array.from(document.querySelectorAll('[data-menu-action]'));

    startBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleMenu(startMenu, startBtn);
    });

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            const action = item.dataset.menuAction;
            handleMenuAction(action, startMenu, startBtn);
        });
    });

    document.addEventListener('click', (e) => {
        if (!startMenu.contains(e.target) && e.target !== startBtn) {
            startMenu.style.display = 'none';
            startBtn.classList.remove('active');
        }
    });
}

function toggleMenu(menu, button) {
    const isOpen = menu.style.display === 'block';
    menu.style.display = isOpen ? 'none' : 'block';
    button.classList.toggle('active', !isOpen);
}

function handleMenuAction(action, menu, button) {
    switch (action) {
        case 'open-ka-language':
        case 'open-cs2-case-opening':
            openWindow('window-projects', 'tab-projects');
            break;
        case 'open-projects':
            // intentionally keep projects closed on startup; open only via click
            openWindow('window-projects', 'tab-projects');
            break;
        case 'open-about':
            // intentionally keep about closed on startup; open only via click
            openWindow('window-about', 'tab-about');
            break;
        default:
            break;
    }

    menu.style.display = 'none';
    button.classList.remove('active');
}
