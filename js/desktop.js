import { openWindow, closeWindow, setActiveWindow } from './windowManager.js';

export function initDesktop() {
    const desktop = document.getElementById('desktop');
    if (!desktop) return;

    bindIcon('icon-welcome', 'window-welcome', 'tab-welcome');
    bindIcon('icon-hacking', 'window-hacking', 'tab-hacking');
    bindIcon('icon-projects', 'window-projects', 'tab-projects');
    bindIcon('icon-about', 'window-about', 'tab-about');
    bindIcon('icon-credits', 'window-credits', 'tab-credits');

    setupWindowButtons();
    openWindow('window-welcome', 'tab-welcome');
}

function bindIcon(iconId, windowId, tabId) {
    const icon = document.getElementById(iconId);
    if (!icon) {
        console.warn(`Desktop icon not found: ${iconId}`);
        return;
    }

    icon.addEventListener('click', () => {
        openWindow(windowId, tabId);
    });
}

function setupWindowButtons() {
    const windowSetups = [
        {
            windowId: 'window-welcome',
            iconId: 'icon-welcome',
            closeBtnId: 'close-welcome',
            minBtnId: 'min-welcome',
            titleBarId: 'titlebar-welcome',
            tabId: 'tab-welcome'
        },
        {
            windowId: 'window-hacking',
            iconId: 'icon-hacking',
            closeBtnId: 'close-hacking',
            minBtnId: 'min-hacking',
            titleBarId: 'titlebar-hacking',
            tabId: 'tab-hacking'
        },
        {
            windowId: 'window-projects',
            iconId: 'icon-projects',
            closeBtnId: 'close-projects',
            minBtnId: 'min-projects',
            titleBarId: 'titlebar-projects',
            tabId: 'tab-projects'
        },
        {
            windowId: 'window-about',
            iconId: 'icon-about',
            closeBtnId: 'close-about',
            minBtnId: 'min-about',
            titleBarId: 'titlebar-about',
            tabId: 'tab-about'
        },
        {
            windowId: 'window-credits',
            iconId: 'icon-credits',
            closeBtnId: 'close-credits',
            minBtnId: 'min-credits',
            titleBarId: 'titlebar-credits',
            tabId: 'tab-credits'
        }
    ];

    windowSetups.forEach(config => {
        const winEl = document.getElementById(config.windowId);
        const icon = document.getElementById(config.iconId);
        const closeBtn = document.getElementById(config.closeBtnId);
        const minBtn = document.getElementById(config.minBtnId);
        const titleBar = document.getElementById(config.titleBarId);
        const tab = document.getElementById(config.tabId);

        if (!winEl || !icon || !closeBtn || !minBtn || !titleBar || !tab) {
            console.warn(`Missing desktop element for ${config.windowId}`);
            return;
        }

        icon.addEventListener('click', () => {
            if (winEl.classList.contains('window-open')) {
                setActiveWindow(config.windowId);
            } else {
                openWindow(config.windowId, config.tabId);
            }
        });

        closeBtn.addEventListener('click', () => closeWindow(config.windowId, config.tabId));
        minBtn.addEventListener('click', () => closeWindow(config.windowId, config.tabId));

        tab.addEventListener('click', () => {
            if (winEl.classList.contains('window-open')) {
                if (winEl.style.zIndex == '10') {
                    closeWindow(config.windowId, config.tabId);
                } else {
                    setActiveWindow(config.windowId);
                }
            } else {
                openWindow(config.windowId, config.tabId);
            }
        });

        winEl.addEventListener('mousedown', () => setActiveWindow(config.windowId));
        attachWindowInteractions(winEl, titleBar);
    });
}

function attachWindowInteractions(winEl, titleBar) {
    if (!winEl || !titleBar) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialLeft = 0;
    let initialTop = 0;

    titleBar.style.cursor = 'move';

    titleBar.addEventListener('mousedown', (event) => {
        if (event.button !== 0) return;
        isDragging = true;
        const rect = winEl.getBoundingClientRect();
        startX = event.clientX;
        startY = event.clientY;
        initialLeft = rect.left;
        initialTop = rect.top;

        winEl.style.position = 'absolute';
        setActiveWindow(winEl.id);
        document.body.style.userSelect = 'none';
        event.preventDefault();
    });

    document.addEventListener('mousemove', (event) => {
        if (!isDragging) return;
        const dx = event.clientX - startX;
        const dy = event.clientY - startY;
        winEl.style.left = `${Math.max(0, initialLeft + dx)}px`;
        winEl.style.top = `${Math.max(0, initialTop + dy)}px`;
    });

    document.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.userSelect = '';
    });
}
