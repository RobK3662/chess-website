function login(event) {
    event.preventDefault(); // Verhindert Standardverhalten des Formulars (Seitenneuladen)

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (validateCredentials(username, password)) {
        showSuccessAlert();
        redirectToIndexPage();
        return true;
    } else {
        showFailureAlert();
        return false; // Verhindert das Absenden des Formulars
    }
}

// Hilfsfunktionen
function validateCredentials(username, password) {
    return username === "test" && password === "123";
}

function showSuccessAlert() {
    alert("Erfolgreich eingeloggt!");
}

function showFailureAlert() {
    alert("Falscher Benutzername oder Passwort!");
}

function redirectToIndexPage() {
    window.location.href = "index.html"; // Weiterleitung zur index.html
}

// Exportiere die Funktionen für Tests
module.exports = {
    login,
    validateCredentials,
    showSuccessAlert,
    showFailureAlert,
    redirectToIndexPage,
};