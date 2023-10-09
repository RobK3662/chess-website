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
const itemsPerPage = 5;

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
        button.addEventListener("click", () => {
            displayTable(i);
        });
        pagination.appendChild(button);
    }
}

// Initialisieren Tabelle und die Paginierung
displayTable(1);
createPaginationButtons();
