// Lade die Ranglisten-Daten
function loadLeaderboard() {
    const apiUrl = "https://api.chess.com/pub/leaderboards";

    // Führen Sie die API-Anfrage mit Fetch durch
    fetch(apiUrl)
        .then((response) => response.json()) 
        console.log(".")
//         .then((data) => {
//             // Überprüfen, ob data.leaderboards existiert und mindestens ein Element enthält
//             if (data.leaderboards && data.leaderboards.length > 0) {
//                 const tableData = data.leaderboards[0].rankings;

//                 const table = document.getElementById("leaderboardData");

//                 // Leere die Tabelle zuerst
//                 table.innerHTML = "";

//                 for (const rowData of tableData) {
//                     const row = document.createElement("tr");
//                     row.innerHTML = `
//                         <td>${rowData.rank}</td>
//                         <td><img src="${rowData.avatar}" alt="Avatar" class="h-16 w-16 rounded-full" /></td>
//                         <td>${rowData.username}</td>
//                         <td>${rowData.score}</td>
//                         <td>${rowData.title}</td>
//                         <td>${rowData.country}</td>
//                         <td>${rowData.wins}</td>
//                         <td>${rowData.losses}</td>
//                         <td>${rowData.draws}</td>
//                     `;
//                     table.appendChild(row);
//                 }
//             } else {
//                 console.error("API-Antwort enthält keine Leaderboard-Daten.");
//             }
//         })
//         .catch((error) => {
//             console.error("Fehler beim Abrufen der Daten:", error);
//         });
}

console.log(loadLeaderboard())