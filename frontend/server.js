const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();
const port = 3000;

const db = new sqlite3.Database('user.db');

app.use(express.json());
app.use(express.static('public'));
//Registrierung
app.post('/register', (req, req) => {
    const { username, password } = req.body;
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], (err) => {
        if (err){
            return res.status(500).send('Fehler bei der Registrierung.');
        }
        res.send('Registrierung war erfolgreich, vielen Dank!');
    )};
});

//Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Überprüft die Benutzerdaten in der Datenbank
  db.get(`SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, row) => {
    if (err) {
      return res.status(500).send('Fehler bei der Anmeldung.');
    }
    if (!row) {
      return res.status(401).send('Ungültige Anmeldedaten.');
    }
    res.send('Anmeldung erfolgreich.');
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
