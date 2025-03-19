document.addEventListener('DOMContentLoaded', () => {
    const sidebarCheckbox = document.getElementById('sidebar-active');

    sidebarCheckbox.addEventListener('change', () => {
        if (sidebarCheckbox.checked) {
            document.body.classList.add('no-scroll'); // Scrollen deaktivieren
        } else {
            document.body.classList.remove('no-scroll'); // Scrollen aktivieren
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sidebarCheckbox = document.getElementById('sidebar-active');
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('main');

    sidebarCheckbox.addEventListener('change', () => {
        if (sidebarCheckbox.checked) {
            // Hintergrund abdunkeln und blurren
            overlay.style.display = 'block';
            overlay.style.opacity = '1';
            mainContent.style.filter = 'blur(3px)';
        } else {
            // Hintergrund zurücksetzen
            overlay.style.display = 'none';
            overlay.style.opacity = '0';
            mainContent.style.filter = 'none';
        }
    });
});