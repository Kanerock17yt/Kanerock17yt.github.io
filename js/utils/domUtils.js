export function query(selector) {
    return document.querySelector(selector);
}

export function queryAll(selector) {
    return Array.from(document.querySelectorAll(selector));
}

export function createElement(tag, options = {}) {
    const element = document.createElement(tag);

    Object.entries(options).forEach(([key, value]) => {
        if (key === 'className') {
            element.className = value;
        } else if (key === 'text') {
            element.textContent = value;
        } else {
            element.setAttribute(key, value);
        }
    });

    return element;
}
