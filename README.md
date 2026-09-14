# 🖥️ Kane's Portfolio & Arcade Hub

> **A personal portfolio showcasing Kane's projects, programming work, and creations, complete with an arcade hub and a secret vault.**

Welcome to my portfolio! This website is a central place to showcase the projects I've built, programming experiments I've worked on, and things I'm currently creating.

The portfolio combines a modern project showcase with a **Windows 95/98-inspired visual style**, giving the site a nostalgic desktop-computer feel while housing a fully functional arcade hub and password-protected secret vault.

---

## ✨ Features

- 👨‍💻 Personal portfolio & project showcase
- 🪟 Windows 95/98-inspired interface
- 🎮 **Public Arcade Hub (`games.html`)**: Central station for playing public browser games.
- 🔒 **Classified Vault (`assets/games2.html`)**: Secure, password-protected area guarded by a browser-console Base64 decoding challenge.
- 🧩 **Modular Architecture**: Self-contained sub-sites located in the `sub websites/` directory with embedded CSS and JavaScript.
- 🍪 **Interactive Mini-Games**: 
  - Flappy Bird
  - Talk to Nothing (interactive void chat)
  - Tetris
  - Cookie Clicker (featuring a `?cappy` easter egg and a **Duo Button** multi-click mode using Space + Up Arrow)
  - Retro Sound Board (frequency synthesizer)
  - Eat Bread mini-game
- 🚀 **Static Hosting Ready**: Optimized for GitHub Pages with search engine crawler configuration (`robots.txt`).

---

## 👨‍💻 About Me

I'm **Kane**, a programmer and creator who enjoys building software, websites, games, and programming projects.

I like experimenting with different technologies and creating my own projects — from web applications and tools to programming languages and game-related projects.

This portfolio brings my work and arcade games together in one place.

---

## 📁 Project Structure

<pre>
Kane's Portfolio/
│
├── index.html              # Main portfolio homepage
├── games.html              # Public arcade hub
├── robots.txt              # Search engine crawler rules
├── assets/
│   └── games2.html         # Secret password-protected vault
└── sub websites/
    ├── flappy.html         # Flappy Bird sub-site
    ├── talk.html           # Talk to Nothing sub-site
    ├── tetris.html         # Tetris sub-site
    ├── cookie.html         # Cookie Clicker / Cappy Clicker
    ├── soundboard.html     # Audio frequency sound board
    └── bread.html          # Eat Bread mini-game
</pre>

---

## 🔒 Accessing the Secret Vault

The secret vault (`assets/games2.html`) is locked behind an authorization gate:

1. Navigate to the secret vault page.
2. Open your browser's developer console (`F12` or right-click -> Inspect -> Console).
3. Look for the system log hint containing the encoded Base64 password string.
4. Type `atob('YOUR_ENCODED_STRING')` in the console to reveal the password, then enter it to unlock the vault.

---

## 🛠️ Running Locally

### Quick Python Server

<pre>
python3 -m http.server 8000
</pre>

Then open your browser at:

<pre>
http://127.0.0.1:8000
</pre>

### Windows

If `python3` isn't recognized, use:

<pre>
python -m http.server 8000
</pre>

---

## 🎨 Design

The portfolio uses a **Windows 95/98-inspired design** while remaining a modern website.

The interface features:

- 🪟 Classic window borders
- 🔘 Retro buttons
- 🖥️ Desktop-style navigation
- 🎨 Nostalgic system colors
- 📁 Desktop-inspired elements
- 📋 Old-school UI components
- ✨ Pixel-inspired styling

---

## 🗺️ Roadmap

- [ ] Add more projects
- [ ] Add more arcade mini-games
- [ ] Implement `localStorage` high-score tracking
- [ ] Enhance mobile touch controls for sub-sites
- [ ] Add additional retro-style windows

---

## 📢 Contact

The **Contact** section of the portfolio contains links to my available profiles, projects, and other places where you can find my work.

---

## 📜 License

See the repository's license for information about using and modifying the project.

---

<p align="center">

**Made by Kane**

💻 `Kane's Portfolio`

</p>