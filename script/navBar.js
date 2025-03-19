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

document.addEventListener('DOMContentLoaded', () => {
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    const body = document.body;
  
    // Lade den Dark-Mode-Status aus dem localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
      body.classList.add('dark-mode');
      darkModeCheckbox.checked = true;
    }
  
    // Event Listener für den Dark Mode Toggle
    darkModeCheckbox.addEventListener('change', () => {
      if (darkModeCheckbox.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });