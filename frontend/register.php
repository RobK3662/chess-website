<?php
// Verbindung zur Datenbank herstellen (wie im vorherigen Beispiel beschrieben)
$servername = "localhost"; // Hier den Servernamen eintragen, z.B. localhost
$username = "root"; // Hier den Datenbank-Benutzernamen eintragen
$password = ""; // Hier das Datenbankpasswort eintragen (leer, wenn keins gesetzt wurde)
$dbname = "userdaten"; // Hier den Namen deiner Datenbank eintragen

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}

// Überprüfen, ob das Formular gesendet wurde
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $benutzername = $_POST["Benutzername"]; // Hier den Namen des Formularfelds für den Benutzernamen eintragen
    $passwort = $_POST["Passwort"]; // Hier den Namen des Formularfelds für das Passwort eintragen

    

    // SQL-Befehl zum Einfügen der Daten in die Tabelle
    $sql = "INSERT INTO userdaten (name, passwort) VALUES ('$benutzername', '$passwort')";

    if ($conn->query($sql) === TRUE) {
        echo "Registrierung erfolgreich!";
    } else {
        echo "Fehler beim Registrieren: " . $conn->error;
    }
}

$conn->close();
?>