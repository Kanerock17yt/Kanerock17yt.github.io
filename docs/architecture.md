# Architecture

This project uses a modular front-end structure:

- `index.html` contains the desktop UI shell.
- `style.css` imports CSS module files from `css/`.
- `js/app.js` bootstraps the application and imports feature modules.
- `js/desktop.js` handles desktop icons and window controls.
- `js/startMenu.js` manages the start menu and menu actions.
- `js/projects.js` generates the GitHub project cards.
- `js/clock.js` keeps the clock updated.
- `js/windowManager.js` provides window focus/state management.
