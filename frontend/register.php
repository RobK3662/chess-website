<?php

$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "userdaten";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbindung zur Datenbank fehlgeschlagen: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $benutzername = $_POST["Benutzername"]; 
    $passwort = $_POST["Passwort"]; 
    

    $sql = "INSERT INTO userdaten (name, passwort) VALUES ('$benutzername', '$passwort')";

    if ($conn->query($sql) === TRUE) {
        echo "Registrierung erfolgreich!";
    } else {
        echo "Fehler beim Registrieren: " . $conn->error;
    }
}

$conn->close();
?>