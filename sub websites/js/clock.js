export function initClock() {
    const clock = document.getElementById('clock');

    if (!clock) return;

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        clock.textContent = `${hours}:${minutes} ${ampm}`;
    }

    updateClock();
    setInterval(updateClock, 1000);
}
