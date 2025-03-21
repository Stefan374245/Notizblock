// Funktion zum Setzen eines Cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Funktion zum Lesen eines Cookies
function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1);
        }
    }
    return "";
}

// Funktion zum Löschen eines Cookies
function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");

    // Überprüfen, ob der Benutzer bereits eine Auswahl getroffen hat
    if (getCookie("cookiesAccepted") === "true") {
        cookieBanner.style.display = "none";
    } else if (getCookie("cookiesAccepted") === "false") {
        cookieBanner.style.display = "none";
        console.log("Cookies wurden abgelehnt.");
    } else {
        cookieBanner.style.display = "flex";
    }

    // Wenn der Benutzer Cookies akzeptiert
    acceptButton.addEventListener("click", () => {
        setCookie("cookiesAccepted", "true", 1); // Cookie für 1 Tag speichern
        cookieBanner.style.display = "none";
        console.log("Cookies wurden akzeptiert.");
    });

    // Wenn der Benutzer Cookies ablehnt
    declineButton.addEventListener("click", () => {
        setCookie("cookiesAccepted", "false", 365); // Cookie für 1 Jahr speichern
        cookieBanner.style.display = "none";
        console.log("Cookies wurden abgelehnt.");
    });
});