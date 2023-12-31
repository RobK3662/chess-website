const itemsPerPage = 10;
let currentPage = 1;

// Funktion zum Anzeigen der Elemente basierend auf der aktuellen Seite
function displayTable(page) {
    const table = document.getElementById("leaderboardData");
    table.innerHTML = ""; // Tabelle leeren

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < tableData.length; i++) {
        const player = tableData[i];
        const row = document.createElement("tr");
        const country = player.country.slice(-2);
        row.innerHTML = `
            <td>${player.rank}</td>
            <td><img src="${player.avatar}" alt="Avatar" class="h-12 w-12 rounded-full mx-auto" /></td>
            <td>${player.username}</td>
            <td>${player.score}</td>
            <td>${player.title}</td>
            <td>${country}</td>
            <td>${player.win_count}</td>
            <td>${player.loss_count}</td>
            <td>${player.draw_count}</td>
        `;
        table.appendChild(row);
    }
}

// Funktion zum Erstellen der Navigationsschaltflächen
function createPaginationButtons() {
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    const totalPages = Math.ceil(tableData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.innerText = i;
        button.classList.add("px-0.2", "py-1", "text-white", "rounded");

        // Hinzufügen einer Klasse "active" für die aktuelle Seite
        if (i === 1) {
            button.classList.add("active");
        }

        button.addEventListener("click", () => {
            // Entfernen der "active"-Klasse von allen Schaltflächen
            const buttons = pagination.querySelectorAll("button");
            buttons.forEach((btn) => btn.classList.remove("active"));

            // Hinzufügen der "active"-Klasse zur ausgewählten Schaltfläche
            button.classList.add("active");

            currentPage = i;
            displayTable(currentPage);
        });
        pagination.appendChild(button);
    }
}

createPaginationButtons();
displayTable(currentPage);

//--------------------------Leaderboard functions-----------------------------------//

// Button Farbänderung nach Auswahl

function changeColor(button) {
    const buttons = document.querySelectorAll(".calculate-button");
    buttons.forEach((btn) => {
        btn.classList.remove("active");
        btn.classList.remove("color-change");
    });
    button.classList.add("active");
    button.classList.add("color-change");
}

function loadLiveBlitz() {
    const apiUrl = "https://api.chess.com/pub/leaderboards";
    // Durchführen der API-Anfrage mit Fetch
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Überprüfen, ob "live_blitz" in der Antwort vorhanden ist und eine Liste (Array) ist
            if (Array.isArray(data.live_blitz)) {
                tableData = data.live_blitz; // Aktualisieren  tableData
                createPaginationButtons(); // Aktualisieren Seitensteuerung
                displayTable(currentPage);
            } else {
                console.error(
                    "Der Wert für 'live_blitz' wurde nicht als Liste in der API-Antwort gefunden."
                );
            }
        })
        .catch((error) => {
            console.error("Fehler beim Abrufen der Daten:", error);
        });
}

function loadLiveRapid() {
    const apiUrl = "https://api.chess.com/pub/leaderboards";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (Array.isArray(data.live_rapid)) {
                tableData = data.live_rapid;
                createPaginationButtons();
                displayTable(currentPage);
            } else {
                console.error(
                    "Der Wert für 'live_rapid' wurde nicht als Liste in der API-Antwort gefunden."
                );
            }
        })
        .catch((error) => {
            console.error("Fehler beim Abrufen der Daten:", error);
        });
}

function loadLiveDaily() {
    const apiUrl = "https://api.chess.com/pub/leaderboards";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (Array.isArray(data.daily)) {
                tableData = data.daily;
                createPaginationButtons();
                displayTable(currentPage);
            } else {
                console.error(
                    "Der Wert für 'daily' wurde nicht als Liste in der API-Antwort gefunden."
                );
            }
        })
        .catch((error) => {
            console.error("Fehler beim Abrufen der Daten:", error);
        });
}

function loadLiveBullet() {
    const apiUrl = "https://api.chess.com/pub/leaderboards";
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (Array.isArray(data.live_bullet)) {
                tableData = data.live_bullet;
                createPaginationButtons();
                displayTable(currentPage);
            } else {
                console.error(
                    "Der Wert für 'live_bullet' wurde nicht als Liste in der API-Antwort gefunden."
                );
            }
        })
        .catch((error) => {
            console.error("Fehler beim Abrufen der Daten:", error);
        });
}

//Login Bereich

function login(event) {
    event.preventDefault(); // Verhindert Standardverhalten des Formulars (Seitenneuladen)

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "test" && password === "123") {
        alert("Erfolgreich eingeloggt!");
        window.location.href = "index.html"; // Weiterleitung zur index.html
        return true;
    } else {
        alert("Falscher Benutzername oder Passwort!");
        return false; // Verhindere das Absenden des Formulars
    }
}
