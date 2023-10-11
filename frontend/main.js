const tableData = [
    {
        Rang: 1,
        Avatar: "./images/testprof.png",
        Name: "Max Mustermann",
        Score: 2500,
        Titel: "Internationaler Meister",
        Land: "Deutschland",
        Gewonnen: 100,
        Verloren: 50,
        Unentschieden: 10,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
    {
        Rang: 2,
        Avatar: "./images/testprof.png",
        Name: "Maria Musterfrau",
        Score: 2400,
        Titel: "Internationaler Meister",
        Land: "Spanien",
        Gewonnen: 90,
        Verloren: 60,
        Unentschieden: 15,
    },
];

// Anzahl der Elemente pro Seite
const itemsPerPage = 6;

// Funktion zum Anzeigen der Tabelle basierend auf der aktuellen Seite

function displayTable(pageNumber) {
    const table = document.querySelector(".table tbody");
    table.innerHTML = "";

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = pageNumber * itemsPerPage;

    for (let i = startIndex; i < endIndex && i < tableData.length; i++) {
        const rowData = tableData[i];

        // Erstellen einer neuen Tabellenzeile
        const row = document.createElement("tr");

        row.innerHTML = `
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Rang}</td>
            <td class="px-4 py-2 w-[100px] text-center"><img class="h-18 w-18 rounded-lg" src="${rowData.Avatar}" alt=""></td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Name}</td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Score}</td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Titel}</td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Land}</td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Gewonnen}</td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Verloren}</td>
            <td class="px-4 py-2 w-[100px] text-center">${rowData.Unentschieden}</td>
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

            displayTable(i);
        });
        pagination.appendChild(button);
    }
}

// Initialisieren Tabelle und die Paginierung
displayTable(1);
createPaginationButtons();

/*

// Erstelle eine leere Tabelle
function createEmptyTable() {
    const table = document.getElementById("leaderboardData");
    table.innerHTML = "";
}

// Lade die Ranglisten-Daten 
function loadLeaderboard() {
    const apiUrl = "https://api.chess.com/pub/leaderboards";

    // Führen Sie die API-Anfrage mit Fetch durch
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Überprüfen, ob data.leaderboards existiert und mindestens ein Element enthält
            if (data.leaderboards && data.leaderboards.length > 0) {
                const tableData = data.leaderboards[0].rankings;

                const table = document.getElementById("leaderboardData");

                // Leere die Tabelle zuerst
                table.innerHTML = "";

                for (const rowData of tableData) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${rowData.rank}</td>
                        <td><img src="${rowData.avatar}" alt="Avatar" class="h-16 w-16 rounded-full" /></td>
                        <td>${rowData.username}</td>
                        <td>${rowData.score}</td>
                        <td>${rowData.title}</td>
                        <td>${rowData.country}</td>
                        <td>${rowData.wins}</td>
                        <td>${rowData.losses}</td>
                        <td>${rowData.draws}</td>
                    `;
                    table.appendChild(row);
                }
            } else {
                console.error("API-Antwort enthält keine Leaderboard-Daten.");
            }
        })
        .catch((error) => {
            console.error("Fehler beim Abrufen der Daten:", error);
        });
}
*/
