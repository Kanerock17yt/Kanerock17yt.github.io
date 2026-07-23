export function setActiveWindow(windowId) {
    document.querySelectorAll('.window').forEach(window => {
        window.style.zIndex = 1;
    });

    document.querySelectorAll('.win98-taskbar-tab').forEach(tab => {
        tab.classList.remove('active');
        tab.classList.add('minimized');
    });

    const win = document.getElementById(windowId);
    const tab = document.getElementById(`tab-${windowId.split('-')[1]}`);

    if (win) {
        win.style.zIndex = 10;
        win.classList.add('window-open');
    }

    if (tab) {
        tab.classList.remove('minimized');
        tab.classList.add('active');
    }
}

export function openWindow(windowId, tabId) {
    const win = document.getElementById(windowId);
    const tab = document.getElementById(tabId);

    if (!win || !tab) return;

    win.classList.add('window-open');
    win.style.display = 'flex';
    setActiveWindow(windowId);
    tab.classList.remove('minimized');
    tab.classList.add('active');
}

export function closeWindow(windowId, tabId) {
    const win = document.getElementById(windowId);
    const tab = document.getElementById(tabId);

    if (!win || !tab) return;

    win.classList.remove('window-open');
    win.style.display = 'none';
    tab.classList.remove('active');
    tab.classList.add('minimized');
}
